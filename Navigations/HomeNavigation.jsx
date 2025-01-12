import { View, Text } from 'react-native'
import React from 'react'
import { createStackNavigator } from '@react-navigation/stack';
const Stack=createStackNavigator
export default function HomeNavigation() {
  return (
    <Stack.Navigator>
        <Stack.Screen name='home' component={HomeScreen} />
        <Stack.Screen name='course-detail' component={CourseDetailScreen} />
         
    </Stack.Navigator>
  )
}