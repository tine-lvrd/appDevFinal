import { View, Text, TouchableOpacity } from 'react-native';
import React, { useEffect } from 'react';
import { useLocalSearchParams } from 'expo-router';
import FontAwesome6 from '@expo/vector-icons/FontAwesome6';
import Colors from './Constants/Colors';
import { useRouter } from 'expo-router';
import CourseIntro from './Components/CourseIntro';

export default function CourseDetails() {
  const { course } = useLocalSearchParams();

  // Parse the course object
  const parsedCourse = course ? JSON.parse(course) : null;

  useEffect(() => {
    if (parsedCourse) {
      //console.log('Course data:', parsedCourse);
    }
  }, [parsedCourse]);

   const router=useRouter();
  //comeback to the main interface
  const mainRouterButton = () => {
    router.push('/'); // Route back to index page
  };

  return (
    <View>
      <View style={{display:'flex',alignItems:'center',flexDirection:'row',padding:15,marginLeft:10,gap:39}}>

    <TouchableOpacity onPress={mainRouterButton}>
        <FontAwesome6 name="circle-arrow-left" size={28} color={Colors.LOGIN_BUTTON} />
    </TouchableOpacity>
      
      <Text style={{fontFamily:'Lexend-SemiBold',fontSize:26}}>Course Details</Text>
      </View>

      <CourseIntro course={parsedCourse}/>
    </View>
  );
}
