import { View, Text, Button } from 'react-native'
import React from 'react'
import { signOut } from 'firebase/auth'
import { auth } from '../../config/FirebaseConfig'
import { Redirect } from 'expo-router'
import { useRouter } from 'expo-router'
import { RemoveLocalStorage } from '../../service/Storage'

export default function HomeScreen() {

  const router = useRouter();

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
      <Text>HomeScreen1</Text>
      
      <Button title='Logout' onPress={handleLogout} />
    </View>
  );
}