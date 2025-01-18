import { useState, useEffect } from 'react';
import { StyleSheet, View, Button, Text } from 'react-native';
import { useVideoPlayer, VideoView } from 'expo-video';

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
    <View style={styles.contentContainer}>
      {videoSource && player ? (
        <>
          <VideoView style={styles.video} player={player} resizeMode="cover" allowsFullscreen allowsPictureInPicture />
          <View style={styles.controlsContainer}>
            {/* <Button
              title={isPlaying ? 'Pause' : 'Play'}
              onPress={handlePlayPause}
            /> */}
          </View>
        </>
      ) : (
        <Text>Loading video...</Text>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  contentContainer: {
    flex: 1,
    padding: 10,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 50,
    marginTop:90
  },
  video: {
    width: 350,
    height: 200,
  },
  controlsContainer: {
    padding: 5,
    marginBottom:-70
  },
});
