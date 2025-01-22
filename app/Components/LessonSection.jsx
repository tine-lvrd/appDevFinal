import { View, Text, FlatList, TouchableOpacity, StyleSheet } from 'react-native'
import React from 'react'
import SectionHeading from './SectionHeading'
import FontAwesome6 from '@expo/vector-icons/FontAwesome6';
import Colors from '../Constants/Colors';
import { useState } from 'react';



export default function LessonSection({course,onChapterSelect,selectedChapter={}}) {
    const [isEnrolled,setIsEnrolled]=useState(true);

    
  return (
    <View style={{padding:10,margin:5}}>
        <SectionHeading heading={'Lessons'}/>
      <FlatList
        data={course?.chapters}
        showsVerticalScrollIndicator={false}
        renderItem={({item, index})=>(
            <TouchableOpacity 
            onPress={()=>onChapterSelect(item)}
            style={[styles.chapterContainer,selectedChapter==item&&{backgroundColor:Colors.TEXT}]}>
                
                <View style={{display:'flex',flexDirection:'row',gap:10,
                    alignItems:'center'
                }}>
                    <Text style={{fontSize:17,
                        fontFamily:'Lexend-Medium',
                        padding:10,
                        borderRadius:99,
                        backgroundColor:Colors.LIGHT_WHITE,
                        width:40,
                        height:40,
                        color:Colors.LOGIN_BUTTON,
                        borderWidth:0.4,
                        textAlign:'center'
                    }}>{index+1}</Text>

                    <Text style={{fontFamily:'Lexend-Medium',
                        fontSize:17,width:200
                    }}>{item.name}</Text>
                </View>

                {isEnrolled||index==0? <FontAwesome6 name="play" size={24} color={Colors.USER_HEADER} />
                :<FontAwesome6 name="lock" size={22} color={Colors.PRIMARY} />}
                
            </TouchableOpacity>
        )}
        />
    </View>
  )
}

const styles = StyleSheet.create({
  chapterContainer:{
    display:'flex',
    flexDirection:'row',
    justifyContent:'space-between',
    alignItems:'center',
    padding:15,
    borderWidth:0.4,
    marginBottom:10,
    borderRadius:10,
}
})
