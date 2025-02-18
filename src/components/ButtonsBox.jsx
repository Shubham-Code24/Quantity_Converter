

import { View, Text, ImageBackground, TouchableOpacity, StyleSheet, TextInput } from 'react-native';
import React from 'react';

const ButtonsBox = ({input, result, lengthConversion, setInput, resetValue, }) => {
  return (
    
                    <View style={style.box2}>
                        <View style={style.innerBox2}>
                            <TextInput
                             style={style.inputButtonContainer}
                             placeholder = 'Enter the value'
                             placeholderTextColor = '#ffffff'
                             value = {input}
                             onChangeText = {setInput}
                             keyboardType='numeric'
                            />
    
                            <TouchableOpacity 
                            style={style.innerButtonContainer} 
                            activeOpacity={0.7}
                            onPress = {resetValue}
                            >
                                <Text style={style.buttonText}>Reset</Text>
                            </TouchableOpacity>
    
                            <TouchableOpacity 
    
                            style={style.innerButtonContainer}
                             activeOpacity={0.7}
                             onPress = {lengthConversion}
                             
                             >
    
                                <Text style={style.buttonText}>Convert</Text>
                            </TouchableOpacity>
    
                            <TouchableOpacity style={style.inputButtonContainer} activeOpacity={0.7}>
                                <Text style={style.buttonText}>Result: {result}</Text>
                            </TouchableOpacity>
    
                        </View>
    
                    </View>
  )
}



const style = StyleSheet.create({
    box2: {
        flex: 1,
        //borderWidth: 4,

        justifyContent: 'center',
        alignItems: 'center',

    },

    innerBox1: {
        flex: 1,
       // borderWidth: 4,
        flexDirection : 'row',
        justifyContent: 'center',
        alignItems: 'center',

    },

    dropbox : {

        backgroundColor: 'rgb(188, 215, 238)',
        marginVertical: 20,
       // borderRadius: 20,

        height: '25%',

        width: '50%',

        justifyContent: 'center',
        alignItems: 'center',

        marginHorizontal : 20,

    },

    dropbox2 : {

        

    },

    basicText : {
        flex : 1,
        //borderWidth: 4,

        color: 'rgb(38, 65, 116)',
        fontSize: 35,
        fontWeight: 600,
        textAlign: 'center',
    },

    innerBox2: {
        flex: 1,
       // borderWidth: 4,
        width: '85%',
        overflow: 'hidden',
        justifyContent: 'center',
        alignItems: 'center',

    },


    inputButtonContainer: {

        //padding : 15,
        //fontSize : 14,
        backgroundColor: 'rgb(188, 215, 238)',
        marginVertical: 20,
        borderRadius: 20,

        height: '12%',

        width: '100%',

        justifyContent: 'center',
        alignItems: 'center',

        elevation: 15,
    },

    innerButtonContainer: {
        backgroundColor: 'rgb(24, 64, 100)',
        marginVertical: 20,
        borderRadius: 20,

        height: '12%',

        width: '70%',

        justifyContent: 'center',
        alignItems: 'center',

        elevation: 15,
        marginHorizontal: 20,

    },


    buttonText: {

        color: '#fff',
        fontSize: 25,
        fontWeight: 400,
        textAlign: 'center',

    },






});






export default ButtonsBox;















