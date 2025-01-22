import { View, Text, Button, StyleSheet, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import { signOut } from 'firebase/auth'
import { RemoveLocalStorage } from '../../service/Storage'
import { auth } from '../../config/FirebaseConfig'
import { useRouter } from 'expo-router'
import Colors from '../Constants/Colors'
export default function Profile() {

  const router=useRouter();

  const handleLogout = async () => {
    try {
      await signOut(auth);
      await RemoveLocalStorage('userDetail');
      router.replace('/login'); // Redirect to login screen
    } catch (error) {
      console.error('Logout failed: ', error);
    }
  };


  return (
    // gagawa ng logout button na malaya kang idesignan
    <View style={{marginTop:20,
      display:'flex',
      alignItems:'center',
      justifyContent:'center',

    }}>

      <Text style={{marginTop:20,
        fontFamily:'Lexend-SemiBold',
        fontSize:25,
        color:Colors.CHAPTER_ICON
      }}>Thank You, Come Again!</Text>
      <Image source={require('./../../assets/images/src2.jpg')}
      style={{width:200,
        height:200,
        marginTop:20,
        borderRadius:50,
        borderWidth:0.3,
      }}/>

      <TouchableOpacity onPress={handleLogout}>
        <Text style={{fontFamily:'Lexend-Regular',
          fontSize:25,
          marginTop:40,
          backgroundColor:Colors.LIGHT_WHITE,
          borderWidth:0.4,
          padding:15,
          textAlign:'center',
          width:300,
          borderRadius:10,

      }}>Log Out</Text>
      </TouchableOpacity>
      
    </View>
  )
}