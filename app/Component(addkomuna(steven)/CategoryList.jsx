import { View, Text } from 'react-native'
import React from 'react'
import { FlatList } from 'react-native-web'

export default function CategoryList({categories}) {
  return (
    <View>
      <FlatList
        data={categories}
        horizontal={true}
        renderItem={({item,index})=>(
        <View>
            <Image source={{uri:item?.icon?.url}} 
                style={{width:40,height:40,borderRadius:99,objectFit:'contain'}}
            />
            <Text>{item?.name}</Text>
        </View>

        )}
      />

    </View>
  )
}