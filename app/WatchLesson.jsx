import { View, Text, StyleSheet, TouchableOpacity, ScrollView, Image } from 'react-native';
import React, { useEffect, useState } from 'react';
import { useLocalSearchParams } from 'expo-router';
import { VideoView, useVideoPlayer } from 'expo-video'; // Use the useVideoPlayer hook
import Colors from './Constants/Colors';
import LessonSection from './Components/LessonSection';
import GlobalApi from './Constants/GlobalApi';

export default function WatchLesson() {
    const [isPlaying, setIsPlaying] = useState(false);
    
    const { course } = useLocalSearchParams(); // Get course params
    const [parsedCourse, setParsedCourse] = useState(null); // Store parsed course
    const [selectedChapter, setSelectedChapter] = useState(null);

    // Initialize video player using the hook
    const videoSource = selectedChapter?.video?.url ? { uri: selectedChapter.video.url } : null;
    const player = useVideoPlayer(videoSource); // Use the player hook

    // Toggle play/pause when clicked
    const handlePlayPause = () => {
        if (isPlaying && player) {
            player.pause();
        } else if (player) {
            player.play();
        }
        setIsPlaying(!isPlaying);
    };

    // Log course data after it's fetched
    useEffect(() => {
        if (course) {
            try {
                const parsed = JSON.parse(course);
                setParsedCourse(parsed); // Set parsed course if valid
            } catch (error) {
                console.error("Error parsing course data:", error);
            }
        }
    }, [course]); // Only run once when course changes

    // Set the first chapter after parsedCourse is available
    useEffect(() => {
        if (parsedCourse && parsedCourse.chapters?.length > 0) {
            setSelectedChapter(parsedCourse.chapters[0]);
        }
    }, [parsedCourse]);

    // If course data is not available, show a loading message
    if (!parsedCourse) {
        return (
            <View style={styles.container}>
                <Text>No course data available.</Text>
            </View>
        );
    }

    return (
        <ScrollView>
            <View style={styles.container}>
                <Text style={styles.text}>Lessons</Text>

                {/* Video section */}
                {selectedChapter && videoSource && player ? (
                    <>
                        <VideoView
                            style={styles.video}
                            player={player}
                            resizeMode="contain"
                            allowsFullscreen
                            allowsPictureInPicture
                        />
                        <TouchableOpacity onPress={handlePlayPause} >
                            
                        </TouchableOpacity>
                    </>
                ) : (
                    <Image style={{height:200,width:200}}source={{uri: course?.banner?.url}}/>
                )}

                <View style={styles.chapterContainer}>
                    {/* Display selectedChapter's name */}
                    {selectedChapter && selectedChapter.name && (
                        <Text style={styles.chapterTitle}>{selectedChapter.name}</Text>
                    )}

                    <TouchableOpacity onPress={() => onChapterCompleted()}>
                        {/* <Text style={styles.markCompleted}>Mark Completed</Text> */}
                    </TouchableOpacity>
                </View>

                <LessonSection
                    course={parsedCourse}
                    onChapterSelect={(chapter) => setSelectedChapter(chapter)}
                    selectedChapter={selectedChapter}
                />
            </View>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        marginTop: 8,
        padding: 5,
    },
    video: {
        width: '100%',
        height: 280,
        marginTop:5
    },
    text: {
        fontFamily: 'Lexend-SemiBold',
        fontSize: 25,
        marginBottom: 7,
        textAlign: 'center',
    },
    chapterContainer: {
        display: 'flex',
        flexDirection: 'row',
        marginLeft: 1,
        marginTop: 15,
        justifyContent: 'center',
        alignItems: 'center',
    },
    chapterTitle: {
        fontFamily: 'Lexend-SemiBold',
        fontSize: 20,
        width: 220,
        flex: 1,
        textAlign:'center',
    },
    markCompleted: {
        backgroundColor: Colors.LIGHT_WHITE,
        borderWidth: 0.3,
        padding: 10,
        borderRadius: 10,
        marginRight: 5,
        fontFamily: 'Lexend-Regular',
    },
    playPauseButton: {
        backgroundColor: Colors.LIGHT_WHITE,
        padding: 10,
        borderRadius: 10,
        marginTop: 10,
    },
    playPauseText: {
        fontFamily: 'Lexend-Regular',
        fontSize: 16,
        color: Colors.PRIMARY_COLOR,
    },
});
