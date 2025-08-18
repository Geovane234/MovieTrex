import { icons } from '@/constants/icons'
import tw from '@/tailwind'
import { Link } from 'expo-router'
import React from 'react'
import { Image, Text, TouchableOpacity, View } from 'react-native'

const MovieCard = ({id, poster_path, title, vote_average, release_date}: Movie) => {
  return (
    <Link href={`/movies/${id}`} asChild>
      <TouchableOpacity style={tw`w-[33%]`}>
        <Image
          source={{
            uri: poster_path 
            ? `https://image.tmdb.org/t/p/w500${poster_path}`
            : 'https://placeholder.co/600x400/1a1a1a/ffffff.png'
          }}
          style={tw`w-full h-52 rounded-lg`}
          resizeMode='cover'
        />
        <Text style={tw`text-white text-sm font-bold mt-2`} numberOfLines={1}>{title}</Text>
        <View style={tw`flex-row items-center justify-start gap-x-1`}>
          <Image source={icons.star}/>
          <Text style={tw`text-xs text-white font-bold uppercase`}>
            {Math.round(vote_average / 2)}
          </Text>

        </View>
        <View style={tw`flex-row items-center justify-between`}>
          <Text style={tw`text-xs text-light-300 font-medium mt-1`}>
            {release_date?.split('-')[0]}
          </Text>
          {/* <Text style={tw`text-xs text-light-300 font-medium upporcase`}>
            Movie
          </Text> */}
        </View>
      </TouchableOpacity>
      </Link>
  )
}

export default MovieCard