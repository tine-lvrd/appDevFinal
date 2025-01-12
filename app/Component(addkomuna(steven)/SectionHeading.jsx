import { View, Text } from 'react-native'
import React from 'react'

export default function SectionHeading({heading}) {
  return (
    <View>
      <Text style={{fontFamily:'outfit-medium',fontSize:20,marginBottom:5,color:Colors.PRIMARY}}>{heading}</Text> 

      //need import colors pa sa (colors.primary)
    </View>
  )
}