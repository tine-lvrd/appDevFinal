import { View, Text } from 'react-native'
import React from 'react' {useContext,useEffect}

import GlobalApi from "../Utils/GlobalApi"

const getCourseList=()=> {
    GlobalApi.getCourseList().then(resp=>{})
        console.log(resp)
}



<View style={{padding:20,marginTop:25}}>
    {/*Course List */}
    <SectionHeading heading={'Latest Courses'} />
    <CourseList/>


</View>