import { View, Text } from 'react-native'

import GlobalApi from "../Utils/GlobalApi"

//error hindi pa tapos need pa ayusin
const getCourseList=()=> {
    GlobalApi.getCourseList().then(resp=>{})
        console.log(resp)
}



<View style={{padding:20,marginTop:25}}>
    {/*Course List */}
    <SectionHeading heading={'Latest Courses'} />
    <CourseList/>


</View>