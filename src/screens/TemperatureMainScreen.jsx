






import { View, Text, ImageBackground, TouchableOpacity, StyleSheet, TextInput } from 'react-native';
import React, { useState } from 'react';

import DropDown from '../components/DropDown';

import ButtonsBox from '../components/DropDown';

import Icon from 'react-native-vector-icons/MaterialIcons';


const TemperatureMainScreen = ({navigation}) => {

    // Logic part 

    // state variables to manage units, input, res 



    const [fromUnit, setFromUnit] = useState('c');
    const [toUnit, setToUnit] = useState('c');
    const [input, setInput] = useState('');
    const [result, setResult] = useState('0');



    // object for multiplier    (object of objects)


    const tempFactor = {


        c: { c : 1, f : (value)=>(9/5)*value+32, k : (value)=> (value + 273) },


        f: { c : 1, f : 1, k : (value)=> value + 273},


        k: { c :  (value)=> value - 273, f : (value)=>(9/5)*(value - 273) +32, k : 1},

    }




    // convert weight function (work on pressing convert button )


    const temperatureConversion = () => {


        // value which is needed to convert
        let value = parseFloat(input);   // convert to number

        // conversion logic 

        let res = value * tempFactor[fromUnit][toUnit](value);

        // change in state var res

        setResult(res);


    }



    const resetValue = () => {

        setInput('');

        setResult('');
    }


    return (

        <ImageBackground source={require('../assets/images/blue-background.jpg')} style={style.background}>

            <View style={[style.headingContainer, {height : 120,}]}>

                {/* <TouchableOpacity activeOpacity = {0.7} onPress = {()=> navigation.goBack()} style = {{backgroundColor : '#000000', borderWidth : 2,}} >
                                <Icon name = 'arrow-back' size = {30} color = '#000000' style = {{backgroundColor : 'rgb(188, 215, 238)'}} />
                                </TouchableOpacity> */}


                <Text style={[style.headingText, { }]}> Temperature Converter </Text>
            </View>


            <View style={style.container}>

                <View style={style.box1}>

                    <DropDown
                        label='From'
                        selectedValue={fromUnit}
                        onValueChange={(itemValue) => setFromUnit(itemValue)}
                        options={[
                            { label: 'Degree Celsius', value: 'c' },
                            { label: 'Fahrenheit', value: 'f' },
                            { label: 'Kelvin', value: 'k' }
                        ]}
                    />


                    <DropDown
                        label='To'
                        selectedValue={toUnit}
                        onValueChange={(itemValue) => setToUnit(itemValue)}
                        options={[
                            { label: 'Degree Celsius', value: 'c' },
                            { label: 'Fahrenheit', value: 'f' },
                            { label: 'Kelvin', value: 'k' }
                        ]}
                    />




                </View>

                
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
                         onPress = {temperatureConversion}
                         
                         >

                            <Text style={style.buttonText}>Convert</Text>
                        </TouchableOpacity>

                        <TouchableOpacity style={style.inputButtonContainer} activeOpacity={0.7}>
                            <Text style={style.buttonText}>Result : {result}</Text>
                        </TouchableOpacity>

                    </View>

                </View>

                {/* <ButtonsBox input={input} result={result} weightConversion={weightConversion} setInput={setInput} resetValue={resetValue} /> */}

            </View>




        </ImageBackground >


    );
};


const style = StyleSheet.create({

    background: {
        width: '100%',
        height: '100%',
        flex: 1,

    },

    headingContainer: {
        height: '8%',
        // borderWidth: 4,
        justifyContent: 'center',
        alignItems: 'center',

        flexDirection : 'row',
    },

    headingText: {
        color: '#fff',
        fontSize: 40,
        fontWeight: 600,
        textAlign: 'center',
        textDecorationLine: 'underline',
        elevation: 5,

    },

    container: {
        flex: 1,
        //borderWidth: 4,
    },

    box1: {
        flex: 1,
        // borderWidth: 4,

    },

    box2: {
        flex: 1,
        //borderWidth: 4,

        justifyContent: 'center',
        alignItems: 'center',

    },

    innerBox1: {
        flex: 1,
        // borderWidth: 4,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',

    },

    dropbox: {

        backgroundColor: 'rgb(188, 215, 238)',
        marginVertical: 20,
        // borderRadius: 20,

        height: '25%',

        width: '50%',

        justifyContent: 'center',
        alignItems: 'center',

        marginHorizontal: 20,

    },

    dropbox2: {



    },

    basicText: {
        flex: 1,
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

export default TemperatureMainScreen;






















































