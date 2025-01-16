import { View, Text } from 'react-native'
import React from 'react'

export default function SectionHeading({heading}) {
  return (
    <View>
      <Text style={{fontSize:20,marginBottom:10,marginTop:5, fontFamily:'Lexend-Medium', color: '#454B1B'}}>{heading}</Text>
    </View>
  )
}