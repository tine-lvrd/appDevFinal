import { View, Text, Image } from 'react-native'
import React from 'react'
import Colors from '../Constants/Colors'

export default function SourceSection() {
  return (
    <View>

      <View style={{
      padding:8,
      backgroundColor:Colors.PLACEHOLDER,
      display:'flex',
      flexDirection:'row',
      justifyContent:'space-evenly',
      alignItems:'center',
      borderRadius:10,
      marginTop:75,
      gap:6
      }}>
        {/* <View style={{width:110,padding:11,backgroundColor:Colors.LIGHT_WHITE,alignItems:'center',borderRadius:10}}>
        <Image source={require('./../../assets/images/icon1.png')}
        style={{width:40,height:40}}/>
        <Text style={{fontSize:14,textAlign:'center',fontFamily:'Lexend-Regular'}}>Source Code</Text>
        </View>

        <View style={{width:110,padding:11,backgroundColor:Colors.LIGHT_WHITE,alignItems:'center',borderRadius:10}}>
        <Image source={require('./../../assets/images/icon3.png')}
        style={{width:40,height:40}}/>
        <Text style={{fontSize:14,fontFamily:'Lexend-Regular'}}>Demo</Text>
        </View> */}

        {/* <View style={{width:110,padding:11,backgroundColor:Colors.LIGHT_WHITE,alignItems:'center',borderRadius:10}}>
        <Image source={require('./../../assets/images/icon2.png')}
        style={{width:40,height:40}}/>
        <Text style={{fontSize:14,fontFamily:'Lexend-Regular'}}>YouTube</Text>
        </View> */}
      
    
      </View>
    </View>
  )
}