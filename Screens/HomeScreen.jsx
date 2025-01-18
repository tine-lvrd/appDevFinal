import { View, Text, Button } from 'react-native'
import React, { useContext, useEffect, useState } from 'react'
import GlobalApi from "../Utils/GlobalApi"
import {client} from '../Utils/KindConfig';
import SectionHeading from './SectionHeading'

export default function HomeScreen() {
    const {auth,setAuth}=useContext(AuthContext)
    const [categories,setCategories]=useState();
    useEffect(()=>{
        getCategory();
    },[])
    const loggedOut = await.client.logout();
    if (loggedOut) {
        setAuth(false);
            // User was logged out
    };

    //Get Category List
    const getCategory=() =>{
        const getCategory=()=>{
            GlobalApi.getCategory().then(resp=>{
                setCategories(resp.categories);
            })
        }
    }
};
    return (
        <View>
            <Text>HomeScreen</Text>
            <Button title='Logout' onPress={handleLogout} />
        </View>
    )

const getCourseList = () => {
    GlobalApi.getCourseList().then(resp => { 
    setCourseList(resp?.CourseList)
    })
}
const getFilterCourseList=(tag)=>{
    const result=courseList.filter((item)=>item.tag.includes(tag));
    return result
}
    return(
        <ScrollView style={{ padding: 20, marginTop: 25 }}>
            <Header/>
            {/* Category List */}
             <CategoryList categories={categories} />

             {/* All Course List */}
            <SectionHeading heading={'Latest Courses'} />
            <CourseList courseList={courseList} />

            {/* React Native Course List */}
            <SectionHeading heading={'React Native Courses'} />
            <CourseList courseList={getFilterCourseList('react_native')} />
        </ScrollView>
    )
