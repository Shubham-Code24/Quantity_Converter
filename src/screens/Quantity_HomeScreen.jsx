


import { View, Text, TouchableOpacity, StyleSheet, ImageBackground } from 'react-native';
import React from 'react';






const Quantity_HomeScreen = ({navigation}) => {

  return (
 


    <ImageBackground source = {require('../../assets/images/blue-background.jpg')}
                     style = {style.background}>

    <View style = {style.container}>


      <View style = {style.innerContainer}>

      <TouchableOpacity style = {style.buttonContainer} activeOpacity={0.7} onPress = {()=>navigation.navigate('Length Converter')} >
        <Text style = {style.buttonText}>Length</Text>
      </TouchableOpacity>


      <TouchableOpacity style = {style.buttonContainer} activeOpacity={0.7} onPress = {()=>navigation.navigate('Temperature Converter')}>
        <Text style = {style.buttonText}>Temperature</Text>
      </TouchableOpacity>



      <TouchableOpacity style = {style.buttonContainer} activeOpacity={0.7} onPress = {()=>navigation.navigate('Weight Converter')}>
        <Text style = {style.buttonText}>Weight</Text>
      </TouchableOpacity>

      </View>
     

      
    </View>


    </ImageBackground>


  );
};




const style = StyleSheet.create({

  background : {

   width : '100%',
   height : '100%',
   flex : 1,
   justifyContent : 'center',
   alignItems : 'center',

  },


  container : {
    flex : 1,
   // borderWidth : 4,
    justifyContent : 'center',
    alignItems : 'center',
    width : '60%',

    

  },

  innerContainer : {

    //borderWidth : 4,
    height : '40%',
    justifyContent : 'space-around',
    width : '100%',

  },

  buttonContainer : {
    backgroundColor : 'rgb(24, 64, 100)',
    marginVertical : 20,
    borderRadius : 20,

    height : '12%',

    width : '100%',

    justifyContent : 'center',
    alignItems : 'center',

    elevation : 15,
   


  },

  buttonText : {

    color : '#fff',
    fontSize : 25,
    fontWeight : 600,
    textAlign : 'center',

  },



});

export default Quantity_HomeScreen;

































