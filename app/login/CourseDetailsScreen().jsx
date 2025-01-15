import React, { useState, useEffect, useContext } from 'react';
import { ScrollView, View, Alert, TouchableOpacity } from 'react-native';
import { useRoute, useNavigation } from '@react-navigation/native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Colors from '../Utils/Colors';
import CourseIntro from '../Components/CourseIntro';
import SourceSection from '../Components/SourceSection';
import EnrollmentSection from '../Components/EnrollmentSection';
import LessionSection from '../Components/LessionSection';
import { UserDetailContext } from '../../App';
import GlobalApi from '../Utils/GlobalApi';

export default function CourseDetailScreen() {
    const { params } = useRoute();
    const [course, setCourse] = useState(null);
    const { userDetail } = useContext(UserDetailContext);
    const navigation = useNavigation();
    const [userEnrollment, setUserEnrollment] = useState(null);

    useEffect(() => {
        if (params && params.course) {
            setCourse(params.course);
        }
        if (params && userDetail) {
            checkIsUserEnrollToCourse();
        }
    }, [params, userDetail]);

    const checkIsUserEnrollToCourse = () => {
        if (course && userDetail) {
            GlobalApi.checkUserCourseEnrollment(course.slug, userDetail.email)
                .then((resp) => {
                    console.log("--", resp);
                    setUserEnrollment(resp?.userEnrollCourses || null);
                })
                .catch((error) => console.error("Error checking enrollment:", error));
        }
    };

    const onEnrollmentPress = () => {
        if (course?.free) {
            GlobalApi.saveUserCourseEnrollment(course.slug, userDetail.email)
                .then((resp) => {
                    console.log(resp);
                    if (resp) {
                        checkIsUserEnrollToCourse();
                        Alert.alert('Success', 'You just enrolled in your course!', [
                            {
                                text: 'OK',
                                onPress: () => console.log("OK Pressed"),
                                style: 'cancel',
                            },
                        ]);
                    }
                })
                .catch((error) => console.error("Error enrolling in course:", error));
        } else {
            Alert.alert('Notice', 'This course is not free.');
        }
    };

    return (
        <ScrollView style={{ padding: 20, marginTop: 25, backgroundColor: Colors.WHITE }}>
            {/* Back Button */}
            <View
                style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                    marginBottom: 20,
                }}
            >
                <TouchableOpacity onPress={() => navigation.goBack()}>
                    <Ionicons name="arrow-back-circle-sharp" size={40} color={Colors.BLACK} />
                </TouchableOpacity>
            </View>

            {/* Course Intro */}
            {course && <CourseIntro course={course} />}

            {/* Source Section */}
            {course && <SourceSection course={course} userEnrollment={userEnrollment} />}

            {/* Enroll Section */}
            {userEnrollment !== null && (
                <EnrollmentSection
                    userEnrollment={userEnrollment}
                    onEnrollmentPress={onEnrollmentPress}
                />
            )}

            {/* Lesson Section */}
            {course && <LessionSection course={course} />}
        </ScrollView>
    );
}
