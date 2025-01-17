import { View, FlatList, Image, Text, StyleSheet, TouchableOpacity } from 'react-native';
import React, { useState } from 'react';
import Colors from '../Constants/Colors';
import SectionHeading from './SectionHeading';

export default function CategoryList({ categories }) {
  const [activeIndex, setActiveIndex] = useState(null); // Ensure null is the initial state

  return (
    <View style={{ marginTop:8}}>
        <SectionHeading heading={'Category'}/>
        
      <FlatList
        data={categories}
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        keyExtractor={(item) => item.id} // Ensure each item has a unique key
        renderItem={({ item, index }) => (
          <TouchableOpacity
            style={[
              styles.container,
              activeIndex === index && {
                borderWidth: 1,
                borderColor:Colors.TEXTHEADING
              },
            ]}
            onPress={() => setActiveIndex(index)} // Update activeIndex on press
          >
            <Image
              source={{ uri: item?.icon?.url }}
              style={styles.image}
            />
            <Text style={styles.text}>{item?.name}</Text>
          </TouchableOpacity>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    padding: 10,
    marginRight: 10,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 15,
  },
  image: {
    width: 20,
    height: 20,
    borderRadius: 70,
    resizeMode: 'contain', // Use resizeMode for compatibility
  },
  text: {
    textAlign: 'center',
    marginTop:4,
    width:60,
    fontFamily:'Lexend-Regular',
    color:Colors.USER_HEADER
  },
});
