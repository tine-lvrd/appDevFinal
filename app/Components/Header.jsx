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

    <View
  style={{
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 5,
    gap: 10,
  }}
>
  <FontAwesome6
    name="laptop-code"
    size={25}
    color={Colors.CHAPTER_ICON}
    style={{ marginLeft: 5, marginRight: 5 }} // Adjust left margin for spacing
  />
  <Text
    style={{
      fontSize: 18,
      marginBottom:6,
      textAlign: 'left',
      fontFamily: 'Lexend-Medium',
      flexShrink: 1,
      color:Colors.PRIMARY
    }}
  >
    Hello{' '}
    <Text
      style={{
        fontFamily: 'Lexend-SemiBold',
        color: Colors.USER_HEADER,
        flexWrap: 'wrap',
        fontSize:25
      }}
    >
      {user?.displayName}
    </Text>
  </Text>
</View>


      

      {/* <View>
        <AntDesign name="setting" size={24} color={Colors.PRIMARY}/>
      </View> */}

    <View style={styles.placeholder}>
        <AntDesign style={{marginLeft:5}}name="search1" size={24} color={Colors.CHAPTER_ICON} />
        <TextInput style={{fontSize:16,fontFamily:'Lexend-ExtraLight'}}placeholder='Search'/>
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
