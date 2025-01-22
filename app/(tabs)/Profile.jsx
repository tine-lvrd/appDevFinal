import { View, Text, Button, StyleSheet } from 'react-native'
import React from 'react'
import { signOut } from 'firebase/auth'
import { RemoveLocalStorage } from '../../service/Storage'
import { auth } from '../../config/FirebaseConfig'
import { useRouter } from 'expo-router'

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
    <View>
      <Button title='Logout' onPress={handleLogout} />
    </View>
  )
}