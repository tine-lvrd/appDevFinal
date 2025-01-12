import { View, Text, Button } from 'react-native'
import React from 'react'
import { signOut } from 'firebase/auth'
import { auth } from '../../config/FirebaseConfig'
import { Redirect } from 'expo-router'
import { useRouter } from 'expo-router'
import { RemoveLocalStorage } from '../../service/Storage'
import GlobalApi from './../Utils/GlobalApi' //needs editing (steven)
export default function HomeScreen() {

  const router = useRouter();
  const [categories,setCategories]=useState();
  useEffect(()=>{ //marker (steven(needs fixing ren))
    getCategory();
  },[]) 

  const handleLogout = async () => {
    try {
      await signOut(auth);
      await RemoveLocalStorage('userDetail');
      router.replace('/login'); // Redirect to login screen
    } catch (error) {
      console.error('Logout failed: ', error);
    }

  
  };
  //Get Category List (steven(needs fixing ren))
  const getCategory=()=>{
    GlobalApi.getCategory().then(resp=>{
    setCategories(resp.categories);
    })
  }

  return (
    <View>
      <Text>HomeScreen</Text>
      <Header></Header>
      <Button title='Logout' onPress={handleLogout} />
    </View>
  );
}