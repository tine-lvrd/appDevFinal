import { View, Text } from 'react-native'
import React from 'react'
import Colors from '../Constants/Colors'
import { useState } from 'react'



export default function EnrollmentSection() {
    const [isEnrolled, setIsEnrolled]=useState(true);
  return (
    <View style={{
        padding:15,
        backgroundColor:Colors.LIGHT_WHITE,
        borderRadius:10,
        width:300,
        display:'flex',
        alignContent:'center',
        marginLeft:27,
        borderWidth:0.7,
        borderColor:Colors.CHAPTER_ICON
        
    }}>
        {isEnrolled?
      <Text style={{textAlign:'center',
        fontFamily:'Lexend-Medium',
        fontSize:15,
        color:'black'
      }}>Continue</Text>

      :<Text style={{textAlign:'center',
        fontFamily:'Lexend-Medium',
        fontSize:15,
        color:'black'
      }}>Enroll to Course</Text>}
    </View>
  )

}