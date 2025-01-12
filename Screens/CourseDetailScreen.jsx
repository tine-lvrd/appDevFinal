import { View, Text, Touchable } from 'react-native'
import React from 'react'
import { useRoute } from '@react-navigation/native';
import Ionicons from '@expo/vector-icons/Ionicons';

export default function CourseDetailScreen() {
    const {params}=useRoute();
    const[course, setCourse]=useState();
    const navigation=useNavigation();
    usereffect (()=>{
        setCourse(params.course)
    },[params])
  return (
    <View style={{padding: 20, marginTop:25}}>
      <View style={{display:'flex', flexDirection: 'row',alignItems: 'center', gap:50}}>
        <TouchableOpacity onPress={()=>navigation.goBack()}>
        <Ionicons name="arrow-back-circle-sharp" size={40} color="black" />
        </TouchableOpacity>
      <Text style={{fontSize:27, fontFamily: 'outfit-bold'}}>Course Detail</Text>
      </View>
    </View>
  )
}