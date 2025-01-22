import { View, Text } from 'react-native'
import React, { useEffect } from 'react'
import { Tabs} from 'expo-router'
import FontAwesome from '@expo/vector-icons/FontAwesome';
import FontAwesome6 from '@expo/vector-icons/FontAwesome6';
import { onAuthStateChanged } from 'firebase/auth';
import { useRouter } from 'expo-router';
import { auth } from '../../config/FirebaseConfig';
import { getLocalStorage } from '../../service/Storage';
import FontAwesome5 from '@expo/vector-icons/FontAwesome5';



export default function TabLayout() {

    const router=useRouter();

    useEffect(()=>{
        GetUserDetail();
    },[])
    
    const GetUserDetail=async()=>{
        const userInfo=await getLocalStorage('userDetail');
        if(!userInfo)
        {
            router.replace('/login')
        }
    }
    
    




  return (
    <Tabs screenOptions={{headerShown:false}}>
        <Tabs.Screen name='index'
            options={{
                tabBarLabel:'Home',
                tabBarIcon:({color,size})=>(
                    <FontAwesome name="home" size={size} color={color} />
                )
            }}/>
        <Tabs.Screen name='MyCourse'
            options={{
                tabBarLabel:'Source',
                tabBarIcon:({color,size})=>(
                    <FontAwesome5 name="hand-sparkles" size={24} color={color} />
                )
            }}/>
        <Tabs.Screen name='Profile'
                options={{
                    tabBarLabel:'Profile',
                    tabBarIcon:({color,size})=>(
                        <FontAwesome6 name="person" size={size} color={color} />
                    )
                }}/>
    </Tabs>
  )
}