import React from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, ImageBackground } from 'react-native';

const RegisterScreen = ({ navigation }) => {
  return (
    <ImageBackground source={require('../assets/images/blue-background.jpg')} style={styles.background}>
      <View style={styles.container}>
        <Text style={styles.title}>Register</Text>
        <Text style={styles.subtitle}>Create a new account</Text>

        <TextInput style={styles.input} placeholder="First Name" placeholderTextColor="#ccc" />
        <TextInput style={styles.input} placeholder="Last Name" placeholderTextColor="#ccc" />
        <TextInput style={styles.input} placeholder="Contact Number" placeholderTextColor="#ccc" />
        <TextInput style={styles.input} placeholder="E-mail" placeholderTextColor="#ccc" />
        <TextInput style={styles.input} placeholder="Password" secureTextEntry placeholderTextColor="#ccc" />
        <TextInput style={styles.input} placeholder="Confirm Password" secureTextEntry placeholderTextColor="#ccc" />

        <TouchableOpacity style={styles.signupButton} onPress={() => navigation.navigate('Quantity_HomeScreen')}>
          <Text style={styles.buttonText}>Signup</Text>
        </TouchableOpacity>

        <Text style={styles.bottomText}>Already Have an account?
          <Text style={styles.linkText} onPress={() => navigation.navigate('Login')}> Login</Text>
        </Text>
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  background: {
    flex: 1,
    resizeMode: 'cover',
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(255, 255, 255, 0.2)', // Glassmorphism Effect
    margin: 30,
    borderRadius: 20,
    padding: 20,
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#fff',
  },
  subtitle: {
    fontSize: 18,
    color: '#fff',
    marginBottom: 20,
  },
  input: {
    backgroundColor: 'rgba(255, 255, 255, 0.3)',
    padding: 15,
    borderRadius: 10,
    width: '80%',
    marginBottom: 10,
    color: '#fff',
  },
  signupButton: {
    backgroundColor: 'rgba(0, 0, 0, 0.7)',
    padding: 15,
    borderRadius: 10,
    width: '80%',
    alignItems: 'center',
    marginTop: 10,
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
  bottomText: {
    color: '#fff',
    marginTop: 10,
  },
  linkText: {
    color: '#4db8ff',
    fontWeight: 'bold',
  },
});

export default RegisterScreen;