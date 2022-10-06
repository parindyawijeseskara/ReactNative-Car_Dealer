import { View, Text,StyleSheet,Image, TouchableOpacity} from 'react-native'
import React from 'react'
import SearchBar from '../components/SearchBar';

export default function MainScreen({navigation}) {
    // function navigate(){
    //     navigation.navigate('AddVehicleDetails');
    // }


  return (
    <View style={styles.container}>
        <SearchBar/>
        <View style={[StyleSheet.absoluteFill,styles.emptyHeaderContainer]}>
            <Text style={styles.emptyHeader}>Add Vehicle Details</Text>
            
                <TouchableOpacity style={styles.button}>
                    <Image style={styles.imageStyle} source={require('../../ReactNative-Car_Dealer/images/image15.png')} ></Image>
                </TouchableOpacity>
                
            
        </View>
    </View>
  )
}

const styles = StyleSheet.create({
    container:{
        paddingHorizontal: 20,
        flex:1,
       // backgroundColor:'red'
    },
    emptyHeader:{
        fontSize:30,
        textTransform:'uppercase',
        fontWeight:'bold',
        opacity:0.2

    },
    emptyHeaderContainer:{
        //backgroundColor:'red',
        flex:1,
        justifyContent:'center',
        alignItems:'center',
        zIndex:-1
    },
    imageStyle:{
        position:'absolute',
        color:'red',
    },
    button:{
        position:'absolute',
        width:'25%',
        //color:'black',
        height:'14%',
        backgroundColor:'#fff',
        borderRadius:10,
        marginTop:20,
        display:'flex',
        justifyContent:'center',
        alignItems:'center',
        right: 35,
        bottom: 20
      }

});