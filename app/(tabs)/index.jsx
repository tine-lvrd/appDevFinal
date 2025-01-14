import { View, Text, Button, StyleSheet } from 'react-native'
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


export default function HomeScreen() {

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

  return (
    <View style={{padding: 20,marginTop:13}}>
      <Header/>

      {/* Category List */}
      <CategoryList categories={categories}/>

      {/* Course List */}
      <SectionHeading heading={'Latest Courses'}/>
      <CourseList courseList={courseList}/>
      
      {/* <Button title='Logout' onPress={handleLogout} /> */}
    </View>
  );
}