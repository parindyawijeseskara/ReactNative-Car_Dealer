import { View, Text,Dimensions,Image,StyleSheet} from 'react-native'
import React from 'react'
import { FlatList } from 'react-native-gesture-handler';


const{width,height}=  Dimensions.get("window");

const slides = [
  {
    image: require('../images/featured1.png')
  },
  // {
  //   id: '2',
  //   image: require('../images/featured3.png')
  // }

];

const Slide = ({item}) =>{
  return(
    <View style={{alignItems:'center',backgroundColor:'white'}}>
      {/* <Image source ={item.image}
      style ={{height:'75%',width:'50%',resizeMode:'contain',alignItems:'center'}}
      /> */}

    </View>

  );
}

export default function OnboardingScreen({navigation}){
  return (
    <View style={styles.container}>
      <FlatList data={slides} contentContainerStyle={{height:height*0.75}}
      />
      <Image source ={require('../images/featured1.png')}
      style ={{height:'55%',width:'80%',resizeMode:'contain',backgroundColor:'white'}}
      />

      
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    padding: 10,
    flex:1,backgroundColor:'#2c3e50',
    alignItems:'center'
  },
});