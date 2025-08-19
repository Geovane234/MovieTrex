import MovieCard from '@/components/MovieCard';
import SearchBar from '@/components/SearchBar';
import { icons } from '@/constants/icons';
import { images } from '@/constants/images';
import { fetchMovies } from "@/services/api";
import useFetch from "@/services/useFetch";
import tw from '@/tailwind';
import { useRouter } from 'expo-router';
import { ActivityIndicator, FlatList, Image, ScrollView, Text, View } from "react-native";
import { getTrendingMovies } from "@/services/appwrite";
import TrendingCard from "@/components/TrendingCard";

export default function Index() {
    const router = useRouter();

    const {
        data: trendingMovies,
        loading: trendingMoviesLoading,
        error: trendingMoviesError,
    } = useFetch(getTrendingMovies)

    const {
        data: movies,
        loading: moviesLoading,
        error: moviesError
    } = useFetch(() => fetchMovies({
        query: ""
    }))

    return (
        <View style={tw`flex-1 bg-primary`}>
            <Image source={images.bg} style={tw`absolute w-full z-0`} />
            <Image source={icons.logo} style={tw`w-12 h-10 mt-15 mb-5 mx-auto`} />
            <ScrollView
                style={tw`flex-1 px-5`}
                showsVerticalScrollIndicator={false}
                contentContainerStyle={{
                    minHeight: '100%',
                    paddingBottom: 10
                }}
            >
                {moviesLoading || trendingMoviesLoading ? (
                    <ActivityIndicator
                        size='large'
                        color='#0000ff'
                        style={tw`mt-10 self-center`}
                    />
                ) : moviesError || trendingMoviesError ? (
                    <Text style={tw`text-red-500 text-center mt-10`}>
                        Error: {moviesError?.message || trendingMoviesError?.message}
                    </Text>
                ) : (
                    <>
                        <SearchBar
                            onPress={() => router.push('/search')}
                            placeholder="Research movie"
                            value={''}
                        />
                        {trendingMovies && (
                            <View style={tw`mt-10`}>
                                <Text style={tw`text-lg text-white font-bold mb-3`}>
                                    Trending movies
                                </Text>
                                <FlatList
                                    horizontal
                                    data={trendingMovies}
                                    ItemSeparatorComponent={() => <View style={tw`w-4`}/>}
                                    renderItem={({ item, index }) => (
                                        <TrendingCard
                                            movie={item}
                                            index={index}/>
                                    )}
                                    keyExtractor={(item) => item.movie_id?.toString() || Math.random().toString()}
                                    showsHorizontalScrollIndicator={false}
                                    style={tw`mb-4 mt-3`}
                                />
                            </View>
                        )}
                        {movies && movies.length > 0 && (
                            <>
                                <Text style={tw`text-lg text-white font-bold mt-5 mb-3`}>
                                    Latest movies
                                </Text>
                                <FlatList
                                    scrollEnabled={false}
                                    data={movies}
                                    renderItem={({ item }) => (
                                        <MovieCard {...item} />
                                    )}
                                    keyExtractor={(item) => item.id.toString()}
                                    numColumns={3}
                                    columnWrapperStyle={{
                                        justifyContent: 'flex-start',
                                        gap: 5,
                                        paddingRight: 5,
                                        marginBottom: 10
                                    }}
                                    style={tw`mt-2 pb-32`}
                                />
                            </>
                        )}
                    </>
                )}
            </ScrollView>
        </View>
    );
}