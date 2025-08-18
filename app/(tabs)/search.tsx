import MovieCard from '@/components/MovieCard'
import SearchBar from '@/components/SearchBar'
import { icons } from '@/constants/icons'
import { images } from '@/constants/images'
import { fetchMovies } from '@/services/api'
import useFetch from '@/services/useFetch'
import tw from '@/tailwind'
import { router } from 'expo-router'
import React, { useEffect, useState } from 'react'
import { ActivityIndicator, FlatList, Image, Text, View } from 'react-native'

const search = () => {

  const [searchQuery, setSearchQuery] = useState("")

  const {data:movies, loading, error, refetch: loadMovies, resetData} = useFetch(() => fetchMovies({
    query: searchQuery
  }), false)

  useEffect(() =>{
    const timeOutId = setTimeout(async() =>{
      if(searchQuery.trim()){
        await loadMovies();
      }else{
        resetData();
      }
    }, 500)
    
    return () => clearTimeout(timeOutId)

  }, [searchQuery])

  return (
    <View style={tw`flex-1 bg-primary`}>
      <Image source={images.bg} style={tw`absolute w-full z-0`} resizeMode='cover'/>
      <Image source={icons.logo} style={tw`w-12 h-10 mt-15 mb-5 mx-auto`}/>
      <FlatList 
      data={movies }
      renderItem={({item}) => (
        <MovieCard {...item}/>
      )}
      keyExtractor={(item) => item.id.toString()}
      numColumns={3}
      columnWrapperStyle={{
        justifyContent: 'center',
        gap: 5,
        marginVertical: 16
      }}
      style={tw`px-5`}
      contentContainerStyle={{
        paddingBottom: 100
      } }
      ListHeaderComponent={
        <View style={tw`my-5`}>
        <SearchBar
          onPress={() => router.push('/search')}
          placeholder="Search movies ..."
          value={searchQuery}
          onChangeText={(text) => setSearchQuery(text)}
        />
        {loading && (
          <ActivityIndicator size='large' color='#0000ff'></ActivityIndicator>
        )}

        {error && (
          <Text style={tw`text-red-500 px-5 my-3`}>Error: {error.message}</Text>
        )}

        {!loading && !error && searchQuery.trim() && movies?.length > 0 && (
          <Text style={tw`text-white font-bold text-xl`}>
            Search Results for{' '}
            <Text style={tw`text-accent`}>
              {searchQuery}
            </Text>
          </Text>
        )}

        </View>
      }
      ListEmptyComponent={
        !loading && !error ?  (
          <View style={tw`mt-10, px-5`}>
            <Text style={tw`text-center, text-light-300`}>
              {searchQuery.trim() ? 'No movie found' : 'Search for a movie'}
            </Text>

          </View>
        ): null
      }

      />
    </View> 
  )
}

export default search