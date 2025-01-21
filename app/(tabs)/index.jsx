import { View, Text, Button, StyleSheet, ScrollView } from 'react-native'
import React from 'react'
import { signOut } from 'firebase/auth'
import { auth } from '../../config/FirebaseConfig'
import { Redirect } from 'expo-router'
import { useRouter } from 'expo-router'
import { RemoveLocalStorage } from '../../service/Storage'
import Header from '../Components/Header'
import GlobalApi from '../Constants/GlobalApi'
import { useEffect, useState } from 'react'
import CategoryList from '../Components/CategoryList'
import SectionHeading from '../Components/SectionHeading'
import CourseList from '../Components/CourseList'
import { useFonts } from 'expo-font';





export default function HomeScreen() {

  const [loaded, error] = useFonts({
    'Lexend-Black': require('./../../assets/fonts/Lexend-Black.ttf'),
    'Lexend-Bold': require('./../../assets/fonts/Lexend-Bold.ttf'),
    'Lexend-ExtraBold': require('./../../assets/fonts/Lexend-ExtraBold.ttf'),
    'Lexend-ExtraLight': require('./../../assets/fonts/Lexend-ExtraLight.ttf'),
    'Lexend-Light': require('./../../assets/fonts/Lexend-Light.ttf'),
    'Lexend-Medium': require('./../../assets/fonts/Lexend-Medium.ttf'),
    'Lexend-Regular': require('./../../assets/fonts/Lexend-Regular.ttf'),
    'Lexend-SemiBold': require('./../../assets/fonts/Lexend-SemiBold.ttf'),
    'Lexend-Thin': require('./../../assets/fonts/Lexend-Thin.ttf'),
  });

  const router = useRouter();

  const [categories,setCategories]=useState([]);
  const [courseList,setCourseList]=useState([]);

  useEffect(()=>{
    getCategory();
    getCourseList();
  },[])

  // Fetch categories from API
  const getCategory = async () => {
    try {
      const response = await GlobalApi.getCategory();
      setCategories(response.categories || []); // Default to empty array if undefined
    } catch (error) {
      console.error('Error fetching categories:', error);
    }
  };

  const handleLogout = async () => {
    try {
      await signOut(auth);
      await RemoveLocalStorage('userDetail');
      router.replace('/login'); // Redirect to login screen
    } catch (error) {
      console.error('Logout failed: ', error);
    }
  };

 const getCourseList=()=>{
  GlobalApi.getCourseList().then(resp=>{
    setCourseList(resp?.courseLists)
  })  
 }

 const getFilterCourseList=(tag)=>{
    const result=courseList.filter((item)=>item.tag.includes(tag));
    return result;
 }

  return (

    
  <ScrollView>
    <View style={{padding: 20,marginTop:13}}>

      <Header/>

      {/* Category List */}
      <CategoryList categories={categories}/>

      {/* All Course List */}
      <SectionHeading heading={'Latest Courses'}/>
      <CourseList courseList={courseList}/>

      {/* Data Structure and Algorithm Course List */}
      <SectionHeading heading={'JavaScript Course'}/>
      <CourseList courseList={getFilterCourseList('javascript')}/>

      {/* Popular Courses */}
      <SectionHeading heading={'Popular Courses'} />
      <CourseList courseList={getFilterCourseList('tailwindcsss')} />
      
      <Button title='Logout' onPress={handleLogout} />
    </View>
  </ScrollView>

    
  );
}

