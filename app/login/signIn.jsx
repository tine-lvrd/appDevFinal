import { View, Text, StyleSheet, TextInput, TouchableOpacity, ToastAndroid, Image } from 'react-native'
import React from 'react'
import Colors from '../Constants/Colors'
import { useRouter } from 'expo-router'
import { auth } from './../../config/FirebaseConfig'
import { signInWithEmailAndPassword } from 'firebase/auth'
import { useState } from 'react'
import { setLocalStorage } from '../../service/Storage'


export default function signIn() {

    const router=useRouter()
    const [email,setEmail]=useState('');
    const [password,setPassword]=useState('');

    const OnSignInClicked = () => {
      if (!email||!password) {
        ToastAndroid.show('Please enter Email and Password', ToastAndroid.SHORT); // Added duration
        return;
      }

    
      signInWithEmailAndPassword(auth, email, password)
        .then(async(userCredential) => {
          // Signed in
          const user = userCredential.user;
          console.log(user);
          await setLocalStorage('userDetail', user);
          router.replace('(tabs)');

        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
    
          if (errorCode === 'auth/invalid-credential') {
            ToastAndroid.show('Invalid Email or Password', ToastAndroid.SHORT); // Added duration
          } else {
            ToastAndroid.show(errorMessage, ToastAndroid.SHORT); // Show general error
          }
        });
    };
    
  return (
    <View style={{padding: 25}}>

      <View style={styles.containerSignIn}>
        <Image style={styles.signIn} source={require('./../../assets/images/signIn.png')}/>
        <Text style={styles.textHeader}>Lets Sign You In!</Text>
        <Text style={styles.subHeader}>Welcome Back  
        <Text style={{color:Colors.CHAPTER_ICON,fontFamily:'Lexend-Bold'}}> LearnMate!</Text></Text>
      </View>
      

      <View>
        <TextInput placeholder='Email' style={styles.textInput}
        onChangeText={(value)=>setEmail(value)}/>
      </View>

      <View>
        <TextInput placeholder='Password' style={styles.textInput}
            secureTextEntry={true}
            onChangeText={(value)=>setPassword(value)}/>
      </View>

      <TouchableOpacity style={styles.loginButton}
      onPress={OnSignInClicked}>
        <Text style={{
            textAlign:'center',
            fontSize:20,
            fontFamily:'Lexend-Regular',
            color:'white'
        }}>Login</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.createAccountButton}
      onPress={()=>router.push('login/signUp')}>
        <Text style={{
            textAlign:'center',
            fontFamily:'Lexend-Regular',
            fontSize:20,
            color:Colors.PRIMARY,
        }}>Create Account</Text>
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  textHeader:{
    fontSize:30,
    fontFamily:'Lexend-Bold',
    textAlign:'center',
  },
  subHeader:{
    fontFamily:'Lexend-Light',
    fontSize: 25,
    textAlign:'center'
  },
  textInput:{
    padding:10,
    borderWidth:0.4,
    marginTop:25,
    fontSize:20,
    borderRadius:10,
    backgroundColor:Colors.PLACEHOLDER,
    fontFamily:'Lexend-Light',
    color:Colors.CHAPTER_ICON,
  },
  loginButton:{
    padding:20,
    backgroundColor:Colors.LOGIN_BUTTON,
    borderRadius:5,
    marginTop:30,
    borderWidth:0.4
    
  },
  createAccountButton:{
    padding:20,
    backgroundColor:Colors.PLACEHOLDER,
    borderRadius:5,
    marginTop:30,
    borderWidth:1,
    borderColor:Colors.PRIMARY
  },
  signIn:{
    width:110,
    height:110,
    objectFit:'cover',
  },
  containerSignIn:{
    display:'flex',
    alignItems:'center',
    justifyContent:'center',
    marginTop:8,
    marginBottom:5
  }
})