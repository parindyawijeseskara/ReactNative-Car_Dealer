import { View, Text,StyleSheet,Image,TextInput,TouchableOpacity,ScrollView} from 'react-native'
import React from 'react'

export default function SignUp() {
  return (
    <View style={styles.mainView}>
        <View style={styles.topView}>
          <Image style={styles.imageStyle} source={require('../../ReactNative-Car_Dealer/images/image5.png')}/>
        
        </View>

        <ScrollView style ={styles.bottomView}>
            <Text style={styles.heading}>
              {/* Welcome{'\n'}
              back */}
              Create Account
            </Text>

            <View style = {styles.formView}>
            <TextInput placeholder={"Name*"} placeholderTextColor={"#fff"}style = {styles.textInput}/>
              <TextInput placeholder={"Email Address*"} placeholderTextColor={"#fff"}style = {styles.textInput}/>
              <TextInput placeholder={"Contact No*"} placeholderTextColor={"#fff"}style = {styles.textInput}/>
              <TextInput placeholder={"Password*"}  secureTextEntry={true} placeholderTextColor={"#fff"}style = {styles.textInput}/>
              <TextInput placeholder={"Confirm Password*"}  secureTextEntry={true} placeholderTextColor={"#fff"}style = {styles.textInput}/>
              <TouchableOpacity style={styles.button}>
                <Text style={styles.buttonText}>Sign Up</Text>
              </TouchableOpacity>
            </View>

            {/* <TouchableOpacity style={styles.textButton} onPress={navigate}>
              <Text style={styles.signUpText}>
                Sign Up
              </Text>
            </TouchableOpacity> */}
        </ScrollView>
      
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
      height:'20%',
      display:'flex',
      justifyContent:'center',
      alignItems: 'center',
      // backgroundColor:'grey'
      
  },
  bottomView:{
      width:'100%',
      height:'80%',
      backgroundColor:'#000',
      borderTopLeftRadius:30,
      borderTopRightRadius:30
  },
  imageStyle:{
    width:'50%',
    resizeMode:'contain'
  },
  heading:{
    color:'#fff',
    fontSize: 32,
    fontWeight:'bold',
    marginLeft:30,
    marginTop:60
  },
  textInput:{
    width:'90%',
    borderWidth:1,
    borderColor:'#fff',
    height:52,
    borderRadius:10,
    paddingLeft:8,
    marginTop:20,
    color:"#fff"

  },
  formView:{
    width:'100%',
    display:'flex',
    flexDirection:'column',
    justifyContent:'center',
    //backgroundColor:'green',
    alignItems:'center',
    marginTop:10
  },
  button:{
    width:'90%',
    //color:'black',
    height:42,
    backgroundColor:'#fff',
    borderRadius:10,
    marginTop:20,
    display:'flex',
    justifyContent:'center',
    alignItems:'center'
  },
  buttonText:{
    fontWeight:'bold',
    fontSize:18,
    color:'black'
  },
  signUpText:{
    color:'grey',
  },
  
  textButton:{
    width:'100%',
    display:'flex',
    alignItems:'center',
    marginTop:20
  }

});