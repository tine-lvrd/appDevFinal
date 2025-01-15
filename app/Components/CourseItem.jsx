import { View, Image, Text } from 'react-native';
import React from 'react';
import AntDesign from '@expo/vector-icons/AntDesign'

export default function CourseItem({ course }) {
  return (
    <View style={{
        backgroundColor:'#FAF9F6',
        width:260,
        marginRight:15,
        padding:10,
        borderRadius:10}}>
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
        <Text style={{fontSize:16}}>{course.name}</Text>
        <Text style={{fontSize:14,color:'white'}}>{course.author}</Text>

        {course?.chapter?.length? <View>
            <AntDesign name="book" size={24} color="black" />
            <Text>{course?.chapter?.length} Chapters</Text>
        </View>:null}
      </View>
    </View>
  );
}
