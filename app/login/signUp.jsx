import { View, Text, StyleSheet, TextInput, TouchableOpacity, ToastAndroid } from 'react-native'
import React from 'react'
import Colors from '../Constants/Colors'
import { useRouter } from 'expo-router'
import { useState } from 'react'
import {auth} from './../../config/FirebaseConfig'
import { createUserWithEmailAndPassword } from 'firebase/auth'
import { updateProfile } from 'firebase/auth'
import { setLocalStorage } from '../../service/Storage'




export default function signUp() {

    const router=useRouter()

    const [email,setEmail]=useState('');
    const [password,setPassword]=useState('');
    const [userName,setUsername]=useState('');
    

    const onCreateAccount=()=>{

      if(!email||!password||!userName){
        ToastAndroid.show('Please fill all required fields to proceed!', ToastAndroid.SHORT);
        return;
      }
      
      createUserWithEmailAndPassword(auth, email, password)
      .then(async(userCredential) => {
        // Signed up 
      const user = userCredential.user;

      await updateProfile(user,{
        displayName:userName,
      });

      await setLocalStorage('userDetail', user);


      router.push('(tabs)')
      // ...
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.log(errorCode);
      if(errorCode=='auth/email-already-in-use'){
        ToastAndroid.show('Email already exists', ToastAndroid.SHORT);
        
      }
    // ..
    });
  }


  return (
    <View style={{padding: 25}}>
      <Text style={styles.textHeader}>Create New Account</Text>

      <View>
        <TextInput placeholder="Full Name"
          style={styles.textInput}
          value={userName} // Ensure this is set
          onChangeText={(value) => setUsername(value)}
        />

      </View>

      <View>
        <TextInput placeholder="Email"
          style={styles.textInput}
          value={email} // Ensure this is set
          onChangeText={(value) => setEmail(value)}
        />

      </View>

      <View>
        <TextInput placeholder="Password"
          style={styles.textInput}
          secureTextEntry
          value={password} // Ensure this is set
          onChangeText={(value) => setPassword(value)}
        />

      </View>

      <TouchableOpacity onPress={onCreateAccount}
        style={styles.loginButton}>

        <Text style={{
            textAlign:'center',
            fontSize:20,
            color:'white'
        }}>Create Account
        </Text>

      </TouchableOpacity>

      <TouchableOpacity style={styles.createAccountButton}
        onPress={()=>router.push('login/signIn')}>

        <Text style={{
            textAlign:'center',
            fontSize:20,
            color:Colors.TEXT
        }}>Already have an account? Sign in
        </Text>

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
