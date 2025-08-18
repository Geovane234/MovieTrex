import { images } from '@/constants/images'
import tw from '@/tailwind'
import React from 'react'
import { Image, View } from 'react-native'

const profile = () => {
  return (
    <View style={tw`flex-1 bg-primary`}>
      <Image source={images.bg} style={tw`absolute w-full z-0`}/>
    </View>
  )
}

export default profile