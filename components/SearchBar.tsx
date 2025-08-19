import { icons } from '@/constants/icons'
import tw from '@/tailwind'
import React from 'react'
import { Image, TextInput, View } from 'react-native'

interface Props {
    placeholder: string,
    onPress?: () => void,
    value?: string,
    onChangeText?: (text: string) => void,
}

const SearchBar = ({onPress, placeholder, value, onChangeText}: Props) => {
  return (
    <View 
    style={tw`flex-row items-center bg-dark-200 rounded-full px-5 py-4`}
    >
        <Image  source={icons.search} style={tw`size-5`} resizeMode='contain' tintColor='#ab8bff'/>
        <TextInput 
        onPress={onPress}
        placeholder={placeholder}
        value={value}
        onChangeText={onChangeText}
        
        style={tw`flex-1 ml-2 text-white`}
        />
    </View>
  )
}

export default SearchBar