import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import { FlatList } from 'react-native-web'
import { ColorProperties } from 'react-native-reanimated/lib/typescript/Colors';

export default function CategoryList({categories}) {
    const [activeIndex,setActiveIndex]=useState();
  return (
    <View style={{marginTop:20}}>
      <FlatList
        data={categories}
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        renderItem={({item,index})=>(
        <TouchableOpacity style={[styles.container,activeIndex==index&&{borderWidth:1,borderColor:Colors.PRIMARY}]} onPress={()=>{setActiveIndex(index)}}>
            <Image source={{uri:item?.icon?.url}} 
                style={{width:40,height:40,borderRadius:99,objectFit:'contain'}}
            />
            <Text style={{textAlign:'center'}}>{item?.name}</Text>
        </TouchableOpacity>

        )}
      />

    </View>
  )
}

const styles = StyleSheet.create({
  container:{
    backgroundColor:Colors.WHITE,
    padding:15,
    marginRight:10,
    alignItems:'center',
    justifyContent:'center',
    borderRadius:15,
    width:90
  }
})
