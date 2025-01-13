import { View, Text, StyleSheet, Image, TextInput } from 'react-native'
import React, { useEffect, useState } from 'react'
import { getLocalStorage } from '../../service/Storage'
import AntDesign from '@expo/vector-icons/AntDesign';
import Colors from '../Constants/Colors'


export default function Header() {

    const [user,setUser]=useState()
    useEffect(()=>{
        getUserDetails();
    },[])

    const getUserDetails=async()=>{
        const userInfo= await getLocalStorage('userDetail');
        // console.log(userInfo);
        setUser(userInfo);
    }


  return (
    <>
    <View>

      <View style={{display:'flex',
        flexDirection:'column',
        alignItems:'center',
        justifyContent:'center'
      }}>

        <Image source={require('./../../assets/images/img2.jpg')}
        style={{width:45,height:40}}/>

        <Text style={{fontSize:18,marginTop:10,textAlign:'center'}}>Welcome <Text style={{fontWeight:'bold',color:'#640D5F'}}>{user?.displayName}!</Text>
        </Text>
      </View>
      

      {/* <View>
        <AntDesign name="setting" size={24} color={Colors.PRIMARY}/>
      </View> */}

    <View style={styles.placeholder}>
        <AntDesign name="search1" size={24} color="black" />
        <TextInput placeholder='Search'/>
    </View>
    
    
    </View>
    </>

  );
}

const styles = StyleSheet.create({
  placeholder:{
    backgroundColor:Colors.PLACEHOLDER,
    borderColor:Colors.TEXTHEADING,
    padding:7,
    borderRadius:40,
    marginTop:25,
    display:'flex',
    flexDirection:'row',
    gap:7,
    alignItems:'center',
    borderWidth:0.3
  }
})
