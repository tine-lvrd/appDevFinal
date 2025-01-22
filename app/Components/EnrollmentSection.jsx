import { View, Text, TouchableOpacity } from 'react-native';
import React, { useState } from 'react';

import Colors from '../Constants/Colors';
import { useRouter } from 'expo-router';

export default function EnrollmentSection({ course }) { // Accept course as a prop
    const [isEnrolled, setIsEnrolled] = useState(true);
    const router = useRouter();

    return (
        <View
            style={{
                padding: 15,
                backgroundColor: Colors.LIGHT_WHITE,
                borderRadius: 10,
                width: 300,
                display: 'flex',
                alignContent: 'center',
                marginLeft: 27,
                borderWidth: 0.7,
                borderColor: Colors.CHAPTER_ICON,
            }}
        >
            {isEnrolled ? (
                <TouchableOpacity
                    onPress={() =>
                        router.push({
                            pathname: '/WatchLesson',
                            params: { course: JSON.stringify(course), userEnrollment: true },
                        })
                    }
                >
                    <Text
                        style={{
                            textAlign: 'center',
                            fontFamily: 'Lexend-Medium',
                            fontSize: 15,
                            color: 'black',
                        }}
                    >
                        Continue
                    </Text>
                </TouchableOpacity>
            ) : (
                <Text
                    style={{
                        textAlign: 'center',
                        fontFamily: 'Lexend-Medium',
                        fontSize: 15,
                        color: 'black',
                    }}
                >
                    Enroll to Course
                </Text>
            )}
        </View>
    );
}
