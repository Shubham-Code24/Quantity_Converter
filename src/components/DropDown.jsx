


import { View, Text, StyleSheet } from 'react-native';
import React from 'react';
import { Picker } from '@react-native-picker/picker';

const DropDown = ({ label, selectedValue, onValueChange, options }) => {



    return (

        <View style={styles.innerBox1}>

            <Text style={styles.basicText}>{label} :</Text>

            <View style={styles.dropbox}>


                <Picker 
                style = {styles.pickerContainer}
                mode = 'dialog'
                selectedValue = {selectedValue}
                onValueChange = {onValueChange}
                >


                    {/* <Picker.Item label = 'centimeter' value = 'cm'/>
                    <Picker.Item label = 'metre' value = 'm'/>
                    <Picker.Item label = 'kilometre' value = 'km'/> */}


                    {options.map((option)=>(
                        <Picker.Item key={option.label} label = {option.label} value = {option.value} />
                    ))}

                </Picker>

                

            </View>

        </View>




    );
};



const styles = StyleSheet.create({

    innerBox1: {
        flex: 1,
       // borderWidth: 4,
        flexDirection : 'row',
        justifyContent: 'center',
        alignItems: 'center',

    },


    pickerContainer : {
        height : 60,
        width : 250,
        backgroundColor : '#ccc',
       
    },


    basicText : {
        flex : 1,
        //borderWidth: 4,

        color: 'rgb(38, 65, 116)',
        fontSize: 35,
        fontWeight: 600,
        textAlign: 'center',
    },


    dropbox : {

        backgroundColor: 'rgb(188, 215, 238)',
        marginVertical: 20,
       // borderRadius: 20,

       

        // justifyContent: 'center',
        // alignItems: 'center',

        marginHorizontal : 15,

    },





});



export default DropDown;