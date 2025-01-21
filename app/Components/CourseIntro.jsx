import { useState, useEffect } from 'react';
import { StyleSheet, View, Button, Text } from 'react-native';
import { useVideoPlayer, VideoView } from 'expo-video';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import Colors from '../Constants/Colors';
import SectionHeading  from './SectionHeading'


export default function CourseIntro({ course }) {
  const [isPlaying, setIsPlaying] = useState(false);

  // Check for video URL before trying to play the video
  const videoSource = course?.chapters?.[0]?.video?.url ? { uri: course.chapters[0].video.url } : null;

  // Initialize video player using the hook
  const player = useVideoPlayer(videoSource);

  // Toggle play/pause
  const handlePlayPause = () => {
    if (isPlaying && player) {
      player.pause();
    } else if (player) {
      player.play();
    }
    setIsPlaying(!isPlaying);
  };


  return (
    <View style={{marginTop:-50,
    display:'flex',
    alignItems:'center',
    justifyContent:'center',
    padding:14,
    }}>
      {videoSource && player ? (
        <>
          <VideoView style={styles.video} player={player} resizeMode="cover" allowsFullscreen allowsPictureInPicture />
          <View style={styles.controlsContainer}>
            {/* <Button
              title={isPlaying ? 'Pause' : 'Play'}
              onPress={handlePlayPause}
            /> */}

            <View style={{paddingTop:5,paddingLeft:5,paddingRight:8,display:'flex'}}>
              <Text style={{fontSize:20,fontFamily:'Lexend-Bold'}}>{course?.name}</Text>
              <Text style={{fontSize: 14,
                          color: '#640D5F',
                          fontFamily: 'Lexend-Regular',
              }}>{course.author}</Text>

<View
          style={{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
            marginTop: 2,
          }}
        >
          {course?.chapters?.length ? (
            <View
              style={{
                display: 'flex',
                marginRight: 3,
                flexDirection: 'row',
                padding: 4,
                gap: 4,
              }}
            >
              <MaterialCommunityIcons
                name="book-open-page-variant"
                size={20}
                color={Colors.CHAPTER_ICON}
                style={{ marginLeft: -4 }}
              />
              <Text
                style={{
                  marginTop: 1,
                  color: '#454B1B',
                  fontFamily: 'Lexend-Regular',
                }}
              >
                {course?.chapters?.length} Chapter
              </Text>
            </View>
          ) : (
            <View
              style={{
                display: 'flex',
                marginRight: 3,
                flexDirection: 'row',
                padding: 4,
                gap: 4,
              }}
            >
              <MaterialCommunityIcons
                name="youtube"
                size={20}
                color={Colors.YOUTUBE_ICON}
                style={{ marginLeft: -4 }}
              />
              <Text
                style={{
                  marginTop: 1,
                  color: '#454B1B',
                  fontFamily: 'Lexend-Regular',
                }}
              >
                Watch on YouTube
              </Text>
            </View>
          )}

          <Text
            style={{
              marginTop: 2,
              fontFamily: 'Lexend-Bold',
              color: '#640D5F',
            }}
          >
            {course.free ? 'Free' : 'Paid'}
          </Text>
        </View>

        <SectionHeading heading={'Description'}/>
        <Text style={{marginTop:-5,fontFamily:'Lexend-Regular'}}numberOfLines={5}>{course?.description}</Text>
              
            </View>
            
          </View>
        </>
        
      ) : (
        <Text>Loading video...</Text>
      )}
      
    </View>
  );
}

const styles = StyleSheet.create({
  video: {
    width: 350,
    height: 200,
    marginTop:40
  },
  controlsContainer: {
    padding: 5,
    marginBottom:-70,
  },
});
