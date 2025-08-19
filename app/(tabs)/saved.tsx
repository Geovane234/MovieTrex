import { images } from '@/constants/images'
import tw from "@/tailwind"
import React from 'react'
import {Image, Text, View} from 'react-native'

const saved = () => {
  return (
    <View style={tw`flex-1 bg-primary`}>
      <Image source={images.bg} style={tw`absolute w-full z-0`}/>
        <Text style={tw`text-gray-500 text-base`}>Save</Text>
    </View>
  )
}

export default saved