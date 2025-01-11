import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import React from 'react'
import { Image } from 'react-native'
import Colors from '../Constants/Colors'
import { useRouter } from 'expo-router'


export default function LoginScreen() {

    const router=useRouter();
  return (
    <View>
      <View>
        <Image style={styles?.image} source={require('./../../assets/images/img1.jpg')}/>
      </View>

      <View style={{padding:20}}>
            <Text style={{color:Colors.PRIMARY, fontSize:45, fontWeight:'300', textAlign:'center'}}>Welcome To <Text style={{color:"#C84C05", fontWeight:'bold'}}>Learn Hub</Text></Text>
            <Text style={{color:Colors.PRIMARY, fontWeight:400,fontSize:15, textAlign:'center'}}>Ultimate Guide to Move Forward. Where Skills Define Future!</Text>
      
      <TouchableOpacity onPress={()=>router.push('login/signIn')}>
        <Text style={styles.button}>Continue</Text>
      </TouchableOpacity>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  image:{
    width:390,
    height:420,
    objectFit:'cover'
  },
  button:{
    backgroundColor:Colors.PRIMARY,
    padding: 20,
    marginTop:15,
    borderRadius:10,
    textAlign:'center',
    color:'white',
    fontSize:20

  }
})
