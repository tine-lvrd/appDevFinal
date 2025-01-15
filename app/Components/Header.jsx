import { View, Text, StyleSheet, Image, TextInput } from 'react-native'
import React, { useEffect, useState } from 'react'
import { getLocalStorage } from '../../service/Storage'
import AntDesign from '@expo/vector-icons/AntDesign'
import Colors from '../Constants/Colors'
import FontAwesome6 from '@expo/vector-icons/FontAwesome6'


export default function Header() {

    const [user,setUser]=useState();
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
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'center',
        marginRight:90,
        paddingRight:10,
        paddingTop:0,
        gap:10,
      }}>

      <FontAwesome6 style={{textAlign:'center'}}name="computer" size={24} color="black" />

        <Text style={{fontSize:18,paddingBottom:5,textAlign:'center'}}>Hello <Text style={{fontWeight:'bold',color:'#640D5F'}}>{user?.displayName}</Text>
        </Text>
      </View>
      

      {/* <View>
        <AntDesign name="setting" size={24} color={Colors.PRIMARY}/>
      </View> */}

    <View style={styles.placeholder}>
        <AntDesign style={{marginLeft:5}}name="search1" size={24} color="black" />
        <TextInput style={{fontSize:16}}placeholder='Search'/>
    </View>
    
    
    </View>
    </>

  );
}

const styles = StyleSheet.create({
  placeholder:{
    backgroundColor:'#F9F6EE',
    borderColor:Colors.TEXTHEADING,
    padding:7,
    borderRadius:10,
    marginTop:10,
    display:'flex',
    flexDirection:'row',
    gap:7,
    alignItems:'center',
    borderWidth:0.3
  }
})
