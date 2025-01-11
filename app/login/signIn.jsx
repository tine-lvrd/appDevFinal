import { View, Text, StyleSheet, TextInput, TouchableOpacity, ToastAndroid } from 'react-native'
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
      <Text style={styles.textHeader}>Lets Sign You In!</Text>
      <Text style={styles.subHeader}>Welcome Back  
        <Text style={{color:Colors.PRIMARY, fontWeight:'bold'}}> LearnMate!</Text></Text>
      <Text style={styles.text}>Good to See You Again</Text>

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
            color:'white'
        }}>Login</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.createAccountButton}
      onPress={()=>router.push('login/signUp')}>
        <Text style={{
            textAlign:'center',
            fontSize:20,
            color:Colors.TEXT
        }}>Create Account</Text>
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  textHeader:{
    fontSize:30,
    fontWeight:'bold',
    textAlign:'center'
  },
  subHeader:{
    fontWeight:'400',
    fontSize: 25,
    textAlign:'center'
  },
  text:{
    fontWeight:'300',
    fontSize: 15,
    textAlign:'center',
    marginTop:15
  },
  textInput:{
    padding:10,
    borderWidth:1,
    marginTop:25,
    fontSize:20,
    borderRadius:10,
    backgroundColor:Colors.PLACEHOLDER,
    fontWeight:'300'
  },
  loginButton:{
    padding:20,
    backgroundColor:Colors.PRIMARY,
    borderRadius:5,
    marginTop:30,
  },
  createAccountButton:{
    padding:20,
    backgroundColor:Colors.PLACEHOLDER,
    borderRadius:5,
    marginTop:30,
    borderWidth:1,
    borderColor:Colors.PRIMARY
  }
})
