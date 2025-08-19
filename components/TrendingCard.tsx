import { images } from '@/constants/images'
import tw from "@/tailwind"
import React from 'react'
import {Image, Text, TouchableOpacity, View} from 'react-native'
import {Link} from "expo-router";
import MaskedView from "@react-native-masked-view/masked-view";

const TrendingCard = ({movie:{movie_id, title, poster_url
}, index}: TrendingCardProps) => {
    return (
        <Link href={`/movies/${movie_id}`} asChild>
            <TouchableOpacity style={tw`w-32 relative pl-5`}>
                <Image
                    source={{uri: poster_url}}
                    style={tw`w-32 h-48 rounded-lg`}
                    resizeMode={"cover"}
                />
                <View style={tw`absolute bottom-9 -left-3.5 px-2 py-1 rounded-full`}>
                    <MaskedView maskElement={
                        <Text style={tw`font-bold text-white text-6xl`}>
                            {index +1}
                        </Text>
                    }>
                        <Image
                            source={images.rankingGradient}
                            resizeMode={"cover"}
                            style={tw`size-14`}
                        />
                    </MaskedView>
                </View>
                <Text style={tw`text-sm font-bold mt-2 text-light-200`} numberOfLines={2}>
                    {title}
                </Text>
            </TouchableOpacity>
        </ Link>
    )
}

export default TrendingCard