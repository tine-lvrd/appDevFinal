import { View, Text } from 'react-native'
import React from 'react'
import Colors from '../Constants/Colors'

export default function SectionHeading({heading}) {
  return (
    <View>
      <Text style={{fontSize:20,marginBottom:10,marginTop:5, fontFamily:'Lexend-Medium', color:Colors.CHAPTER_ICON}}>{heading}</Text>
    </View>
  )
}