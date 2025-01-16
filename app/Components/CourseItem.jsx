import { View, Image, Text } from 'react-native';
import React from 'react';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';


export default function CourseItem({ course }) {
  return (
    <View style={{
        backgroundColor:'#FAF9F6',
        width:260,
        marginRight:15,
        padding:10,
        borderRadius:10,
        gap:4}}>
      {course?.banner?.url ? ( // Check if banner and url exist
        <Image 
          source={{ uri: course.banner.url }} 
          style={{ width: 240, borderRadius: 10, height: 130 }} 
        />
      ) : (
        <View>
          <Text>No Banner Available</Text>
        </View>
      )}

      <View>
        <Text style={{fontSize:16,fontFamily:'Lexend-Regular'}}>{course.name}</Text>
        <Text style={{fontSize:14,color:'black',color:'#640D5F',fontFamily:'Lexend-Regular'}}>{course.author}</Text>

      <View style={{display:'flex',
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center',
        marginTop:2}}>
        {course?.chapters?.length?(
          <View style={{
            
            display:'flex', 
            marginRight:3,
            flexDirection:'row',
            padding:4,
            gap:4,
            
          }}>

          <MaterialCommunityIcons name="book-open-page-variant" size={20} color="#454B1B"
          style={{marginLeft:-4}}/>
            <Text style={{marginTop:1,color:'#454B1B',fontFamily:'Lexend-Regular'}}>{course?.chapters?.length} Chapter</Text>
        </View>):
        <View style={{
            
          display:'flex', 
          marginRight:3,
          flexDirection:'row',
          padding:4,
          gap:4,
          
        }}>

        <MaterialCommunityIcons name="youtube" size={20} color="#990000"
        style={{marginLeft:-4}}/>
          <Text style={{marginTop:1,color:'#454B1B',fontFamily:'Lexend-Regular'}}>Watch on YouTube</Text>
      </View>
        }

        <Text style={{marginTop:2,fontFamily:'Lexend-Bold',color:'#640D5F'}}>{course.free?'Free':'Paid'}</Text>
        </View>

        
      </View>
    </View>
  );
}
