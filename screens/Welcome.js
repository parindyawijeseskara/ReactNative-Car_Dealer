import { View, Text,StyleSheet,Image,TouchableOpacity} from 'react-native'
import React from 'react'

export default function Welcome({navigation}) {
    function navigate(){
        navigation.navigate('SignIn');
    }
  return (
    <View style={styles.mainView}>
      <View style={styles.topView}>
        <Image style={styles.imageStyle} source={require('../../ReactNative-Car_Dealer/images/image9.png')}/>
      </View>

      <View style ={styles.bottomView}>
          <Image style={styles.imageBottom} source={require('../../ReactNative-Car_Dealer/images/images14.jpg')}/>
        
          <View style = {styles.formView}>
            <Text style={styles.welcomeText}>
              {'\t\t\t'}Welcome to Royal Motors{'\n'}
              Start Your Next Purchase Online
            </Text>
          </View>

          <TouchableOpacity style={styles.button} onPress={navigate}>
              <Text style={styles.buttonText}>Get Start</Text>
          </TouchableOpacity> 
      </View>
    </View>
  )
}
const styles = StyleSheet.create({
    mainView:{
      flex: 1,
      marginTop:40,
      flexDirection:'column',
      justifyContent:'center',
      alignItems:'center'
    },
    topView:{
        width:'100%',
        height:'25%',
        display:'flex',
        justifyContent:'center',
        alignItems: 'center'
    },

    bottomView:{
        width:'100%',
        height:'75%',
        backgroundColor:'#000',
        borderTopLeftRadius:30,
        borderTopRightRadius:30,
        display:'flex',
        justifyContent:'center',
        alignItems:'center'
    },
    imageStyle:{
      width:'65%',
      resizeMode:'contain', 
    },

    imageBottom:{
    height:'32%',
      resizeMode:'contain',
      marginTop:-15,
    },
    formView:{
      width:'80%',
      display:'flex',
      flexDirection:'column',
      justifyContent:'center',
      //backgroundColor:'green',
      alignItems:'center',
      //marginTop:40
    },
    button:{
      width:'70%',
      //color:'black',
      height:42,
      backgroundColor:'#fff',
      borderRadius:10,
      marginTop:38,
      display:'flex',
      justifyContent:'center',
      alignItems:'center'
    },
    buttonText:{
      fontWeight:'bold',
      fontSize:18,
      color:'black'
    },

    welcomeText:{
        color:'#fff',
        fontSize:19,
        fontWeight:'bold',
        marginTop:18
    }
  });
