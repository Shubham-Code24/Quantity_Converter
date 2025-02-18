


import { View, Text, ImageBackground, TouchableOpacity, StyleSheet, TextInput } from 'react-native';
import React, { useState } from 'react';

import DropDown from '../components/DropDown';
//import ButtonsBox from '../components/DropDown';

//import Icon from 'react-native-vector-icons/MaterialIcons';

const WeightMainScreen = ({navigation}) => {

    // Logic part 

    // state variables to manage units, input, res 

    const [fromUnit, setFromUnit] = useState('g');
    const [toUnit, setToUnit] = useState('g');
    const [input, setInput] = useState('');
    const [result, setResult] = useState('0');






    // object for multiplier    (object of objects)

    const weightFactor = {
        g: { g: 1, mg: 1000, kg: 0.001 },

        mg: { g: 0.001, mg: 1, kg: 0.000001 },


        kg: { g: 1000, mg: 1000000, kg: 1 },
    }







    // convert weight function (work on pressing convert button )


    const weightConversion = () => {


        // value which is needed to convert
        let value = parseFloat(input);

        // conversion logic 

        let res = value * weightFactor[fromUnit][toUnit];

        // change in state var res

        setResult(res);


    }



    const resetValue = () => {

        setInput('');

        setResult('');
    }


    return (

        <ImageBackground source={require('../assets/images/blue-background.jpg')} style={style.background}>

            <View style={style.headingContainer}>

                {/* <TouchableOpacity activeOpacity = {0.7} onPress = {()=> navigation.goBack()}>
                                <Icon name = 'arrow-back' size = {30} color = '#000000' style = {{position : 'absolute', left : -30, top : -12, backgroundColor : 'rgb(188, 215, 238)'}} />
                                </TouchableOpacity> */}


                <Text style={style.headingText}> Weight Converter </Text>
            </View>


            <View style={style.container}>

                <View style={style.box1}>

                    <DropDown
                        label='From'
                        selectedValue={fromUnit}
                        onValueChange={(itemValue) => setFromUnit(itemValue)}
                        options={[
                            { label: 'Gram', value: 'g' },
                            { label: 'Milligram', value: 'mg' },
                            { label: 'Killogram', value: 'kg' }
                        ]}
                    />
                    <DropDown
                        label='To'
                        selectedValue={toUnit}
                        onValueChange={(itemValue) => setToUnit(itemValue)}
                        options={[
                            { label: 'Gram', value: 'g' },
                            { label: 'Milligram', value: 'mg' },
                            { label: 'Killogram', value: 'kg' }
                        ]}
                    />




                    {/* <View style={style.innerBox1}>

                        <Text style={style.basicText}>To :</Text>

                        <View style={style.dropbox}></View>

                    </View> */}



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
                         onPress = {weightConversion}
                         
                         >

                            <Text style={style.buttonText}>Convert</Text>
                        </TouchableOpacity>

                        <TouchableOpacity style={style.inputButtonContainer} activeOpacity={0.7}>
                            <Text style={style.buttonText}>Result: {result}</Text>
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

export default WeightMainScreen;












