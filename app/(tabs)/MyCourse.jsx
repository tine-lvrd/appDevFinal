import { View, Text, StyleSheet, Image, TouchableOpacity, Alert, Linking } from 'react-native';
import React from 'react';
import Colors from '../Constants/Colors';

export default function MyCourse() {
  // Function to open URLs
  const openURL = async (url) => {
    try {
      const supported = await Linking.canOpenURL(url);
      if (supported) {
        await Linking.openURL(url);
      } else {
        Alert.alert('Error', `Cannot open the URL: ${url}`);
      }
    } catch (err) {
      console.error('Failed to open URL:', err);
    }
  };

  return (
    <View>
      <Text style={styles.title}>Programming Sources</Text>

      <View style={styles.container}>
        <Image style={styles.image} source={require('./../../assets/images/src1.jpg')} />
      </View>

      <View style={styles.containerBtn}>
        <TouchableOpacity style={styles.bTn} onPress={() => openURL('https://www.freecodecamp.org')}>
          <Text style={styles.btnText}>FreeCodeCamp</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.bTn} onPress={() => openURL('https://www.codecademy.com')}>
          <Text style={styles.btnText}>Code Academy</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.bTn} onPress={() => openURL('https://www.w3schools.com')}>
          <Text style={styles.btnText}>W3Schools</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.bTn} onPress={() => openURL('https://www.udemy.com/')}>
          <Text style={styles.btnText}>Udemy</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.bTn} onPress={() => openURL('https://www.coursera.org/')}>
          <Text style={styles.btnText}>Coursera</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.bTn} onPress={() => openURL('https://www.sololearn.com/en/')}>
          <Text style={styles.btnText}>SoloLearn</Text>
        </TouchableOpacity>

      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  title: {
    fontFamily: 'Lexend-Bold',
    fontSize: 25,
    textAlign: 'center',
    marginTop: 20,
    color: Colors.PRIMARY,
  },
  container: {
    display: 'flex',
    alignItems: 'center',
    marginTop: 20,
  },
  image: {
    width: 200,
    height: 200,
    borderRadius: 30,
  },
  bTn: {
    borderWidth: 0.5,
    padding: 10,
    backgroundColor: Colors.LIGHT_WHITE,
    borderRadius: 20,
    margin: 5,
    width: '30%',
    alignItems: 'center',
  },
  btnText: {
    fontFamily: 'Lexend-Regular',
    fontSize: 14,
    color: Colors.PRIMARY,
    textAlign:'center'
  },
  containerBtn: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: 30,
    flexWrap: 'wrap',
    padding: 10,
  },
});
