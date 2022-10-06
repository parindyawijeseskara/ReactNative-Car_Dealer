import { View, Text,StyleSheet } from 'react-native'
import React from 'react'
import { TextInput } from 'react-native-gesture-handler';

export default function SearchBar({containerStyle}) {
  return (
    <View style={[styles.container,{containerStyle}]}>
      <TextInput style={styles.searchBar} placeholder='Search Here...'/>

    </View>
  )
}

const styles = StyleSheet.create({
    container:{

    },
    searchBar:{
        borderWidth:1.2,
        borderColor:'#87CEEB',
        height:40,
        borderRadius:40,
        paddingLeft:15,
        marginVertical:15
        

    }
});