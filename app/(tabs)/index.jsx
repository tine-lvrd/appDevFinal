import { View, Text, Button, StyleSheet, ScrollView } from 'react-native'
import React from 'react'
import { useRouter } from 'expo-router'
<<<<<<< HEAD
import Header from '../Components/Header'
import GlobalApi from '../Constants/GlobalApi'
import { useEffect, useState } from 'react'
import CategoryList from '../Components/CategoryList'
import SectionHeading from '../Components/SectionHeading'
import CourseList from '../Components/CourseList'
import { useFonts } from 'expo-font';





=======
import { RemoveLocalStorage } from '../../service/Storage'
import GlobalApi from './../Utils/GlobalApi' //needs editing (steven)
import CategoryList from '../Component(addkomuna(steven)/CategoryList'
>>>>>>> 2426da7ff74b155402a23b1c9ce92e61b0cb2e2f
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
  const [categories,setCategories]=useState();
  useEffect(()=>{ //marker (steven(needs fixing ren))
    getCategory();
  },[]) 

  const [categories,setCategories]=useState([]);
  const [courseList,setCourseList]=useState([]);
  const [orgCourseList,setOrgCourseList]=useState([]);
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
  //Get Category List (steven(needs fixing ren))
  const getCategory=()=>{
    GlobalApi.getCategory().then(resp=>{
    setCategories(resp.categories);
    })
  }

 const getCourseList=()=>{
  GlobalApi.getCourseList().then(resp=>{
    setCourseList(resp?.courseLists)
    setOrgCourseList(resp?.courseLists);
  })  
 }

 const getFilterCourseList=(tag)=>{
    const result=courseList.filter((item)=>item.tag.includes(tag));
    return result;
 }

 const filterCourseList=(category)=>{
    const result = orgCourseList.filter((item)=>item.tag.includes(category));
    setCourseList(result)
  }

  return (

    
  <ScrollView>
    <View style={{padding: 20,marginTop:13}}>

      <Header/>

      {/* Category List */}
      <CategoryList categories={categories}
      setSelectedCategory={(category)=>filterCourseList(category)}/>

      {/* All Course List */}
      <SectionHeading heading={'Latest Courses'}/>
      <CourseList courseList={courseList}/>

      {/* Data Structure and Algorithm Course List */}
      <SectionHeading heading={'Programming Course'}/>
      <CourseList courseList={getFilterCourseList('proglang')}/>

      {/* Python Courses */}
      <SectionHeading heading={'Database  Courses'} />
      <CourseList courseList={getFilterCourseList('database')} />

      {/* Popular Courses */}
      <SectionHeading heading={'Object Oriented Programming'} />
      <CourseList courseList={getFilterCourseList('python')} />
      
      
<<<<<<< HEAD
=======
      <CategoryList categories={categories}/>

      <Button title='Logout' onPress={handleLogout} />
>>>>>>> 2426da7ff74b155402a23b1c9ce92e61b0cb2e2f
    </View>
  </ScrollView>

    
  );
}

