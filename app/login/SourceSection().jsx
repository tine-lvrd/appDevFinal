import { View, Text, Image, TouchableOpacity } from 'react-native';
import React, { useState } from 'react';
import Colors from '../Utils/Colors';

export default function SourceSection({ course, userEnrollment }) {
    const [isMember, setIsMember] = useState(false);

    const onSourceClick = (url) => {
        console.log(url);
    };

    return (
        <View
            style={{
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'space-between',
                marginTop: 20,
                marginBottom: 10,
            }}
        >
            {/* Source Code Button */}
            <TouchableOpacity
                onPress={() => onSourceClick(course?.sourceCode)}
                style={{
                    padding: 15,
                    backgroundColor: Colors.WHITE,
                    alignItems: 'center',
                    borderRadius: 10,
                    width: 120,
                    borderWidth: 0.4,
                }}
            >
                <Image
                    source={require('./../../assets/images/open-source.png')}
                    style={{ width: 40, height: 40 }}
                />
                <Text style={{ fontSize: 14, fontFamily: 'outfit' }}>Source Code</Text>
            </TouchableOpacity>

            {/* Demo Button */}
            <TouchableOpacity
                onPress={() => onSourceClick(course?.demoUrl)}
                style={{
                    padding: 15,
                    backgroundColor: Colors.WHITE,
                    alignItems: 'center',
                    borderRadius: 10,
                    width: 120,
                    height: 100,
                    borderWidth: 0.4,
                }}
            >
                <Image
                    source={require('./../../assets/images/web-design.png')}
                    style={{ width: 40, height: 40 }}
                />
                <Text style={{ fontSize: 14, fontFamily: 'outfit' }}>Demo</Text>
            </TouchableOpacity>

            {/* YouTube Button */}
            <TouchableOpacity
                onPress={() => onSourceClick(course?.youtubeUrl)}
                style={{
                    padding: 15,
                    backgroundColor: Colors.WHITE,
                    alignItems: 'center',
                    borderRadius: 10,
                    width: 120,
                    borderWidth: 0.4,
                }}
            >
                <Image
                    source={require('./../../assets/images/youtube.png')}
                    style={{ width: 40, height: 40 }}
                />
                <Text style={{ fontSize: 14, fontFamily: 'outfit' }}>YouTube</Text>
            </TouchableOpacity>
        </View>
    );
}