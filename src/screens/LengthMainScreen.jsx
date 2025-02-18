

import { View, Text, ImageBackground, TouchableOpacity, StyleSheet, TextInput } from 'react-native';
import React, {useState} from 'react';

import DropDown from '../components/DropDown';
import ButtonsBox from '../components/ButtonsBox';

import Icon from 'react-native-vector-icons/MaterialIcons';


const LengthMainScreen = ({navigation}) => {

    // Logic part 

    // state variables to manage units, input, res 

    const [fromUnit, setFromUnit] = useState('cm');
    const [toUnit, setToUnit] = useState('cm');
    const [input, setInput] = useState('');
    const [result, setResult] = useState('0');


     


    // convert length function (work on pressing convert button )


    const lengthConversion = () => {


    // value which is needed to convert
    let value = parseFloat(input);

    // object for multiplier 

    const fact = {
        cm : {cm :1 , m : 0.01 , km : 0.00001 },

        m : {cm :100, m : 1, km : 0.001 },


        km : {cm : 100000 , m : 1000 , km :1 },
    }


    // conversion logic 

    let res = value * fact[fromUnit][toUnit];

    // change in state var res

    setResult(res);


}



const resetValue = () => {

    setInput('');

    setResult('');
}
    

    return (

        <ImageBackground source={require('../../../assets/images/blue-background.jpg')} style={style.background}>

            <View style={style.headingContainer}>
                {/* <TouchableOpacity activeOpacity = {0.7} onPress = {()=> navigation.goBack()} style = {{}}>
                <Icon name = 'arrow-back' size = {30} color = '#000000' style = {{position : 'absolute', left : -30, top : -12, backgroundColor : 'rgb(188, 215, 238)'}} />
                </TouchableOpacity> */}
                <Text style={style.headingText}> Length Converter </Text>
            </View>


            <View style={style.container}>

                <View style={style.box1}>

                <DropDown 
                label = 'From'
                 selectedValue = {fromUnit}
                  onValueChange = {(itemValue) => setFromUnit(itemValue)}
                  options = {[
                    {label : 'Centimeter', value :'cm'},
                    {label : 'Meter', value :'m'},
                    {label : 'Kilometer', value :'km'},
                  ]}
                  />


                <DropDown
                 label = 'To'
                  selectedValue = {toUnit} 
                  onValueChange = {(itemValue) => setToUnit(itemValue)}
                  options = {[
                    {label : 'Centimeter', value :'cm'},
                    {label : 'Meter', value :'m'},
                    {label : 'Kilometer', value :'km'},
                  ]}
                  
                  />

                   


                    {/* <View style={style.innerBox1}>

                        <Text style={style.basicText}>To :</Text>

                        <View style={style.dropbox}></View>

                    </View> */}



                </View>

{/* 
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

                </View> */}

                <ButtonsBox input={input} result = {result} lengthConversion = {lengthConversion} setInput = {setInput} resetValue={resetValue}/>

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
        textDecorationLine : 'underline',
        elevation : 5,
       


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

export default LengthMainScreen;












