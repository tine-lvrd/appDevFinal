import { View, Text, StyleSheet, TouchableOpacity, Transparent } from 'react-native'
import React from 'react'
import { Image } from 'react-native'
import Colors from '../Constants/Colors'
import { useRouter } from 'expo-router'


export default function LoginScreen() {

    const router=useRouter();
  return (

    

    <View style={{display:'flex',alignItems:'center',marginTop:50,}}>
      <View>
        <Image style={styles?.image} source={require('./../../assets/images/loginImage.jpg')}/>
      </View>

      <View style={{padding:20}}>
            <Text style={{
              color:Colors.PRIMARY,
              fontFamily:'Lexend-Regular', 
              fontSize:40,
              color:Colors.PRIMARY, 
              textAlign:'center'}}
              >Welcome To <Text 
              style={{
                color:Colors.CHAPTER_ICON, 
                fontWeight:'bold'}}
                >Learn Hub1</Text></Text>
            <Text style={{color:Colors.PRIMARY, fontFamily:'Lexend-Regular',fontSize:15, textAlign:'center'}}>
              Learn Programming Through Video: Where Knowledge Comes to Life and Skills Shape the Future!
            </Text>
      
      <TouchableOpacity onPress={()=>router.push('login/signIn')}>
        <Text style={styles.button}>Continue</Text>
      </TouchableOpacity>
      </View>
    </View>

    
  )
}

const styles = StyleSheet.create({
  image:{
    width:250,
    height:250,
    objectFit:'cover',
    display:'flex',
    alignItems:'center',
    borderRadius:50,
    objectFit:'contain',
    borderWidth:0.5
  },
  button:{
    backgroundColor:Colors.BACKGROUND_BUTTON,
    padding: 20,
    borderWidth:0.4,
    borderColor:Colors.LOGIN_BUTTON,
    marginTop:15,
    borderRadius:10,
    textAlign:'center',
    color:Colors.LOGIN_BUTTON,
    fontSize:20,
    fontFamily:'Lexend-Regular'
  }
})
