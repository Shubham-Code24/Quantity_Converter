


import React from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, ImageBackground } from 'react-native';

const LoginScreen = ({ navigation }) => {
  return (
    <ImageBackground source={require('../assets/images/blue-background.jpg')} style={styles.background}>
      <View style={styles.container}>
        <Text style={styles.title}>Login</Text>
        <Text style={styles.subtitle}>Welcome Back</Text>

        <TextInput style={styles.input} placeholder="E-mail" placeholderTextColor="#ccc" />
        <TextInput style={styles.input} placeholder="Password" secureTextEntry placeholderTextColor="#ccc" />

        <TouchableOpacity style={styles.loginButton} onPress={() => navigation.navigate('Quantity_HomeScreen')}>
          <Text style={styles.buttonText}>Login</Text>
        </TouchableOpacity>

        <Text style={styles.bottomText}>Don't Have an account?
          <Text style={styles.linkText} onPress={() => navigation.navigate('Register')}> Signup</Text>
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
  loginButton: {
    backgroundColor: 'rgba(0, 0, 0, 0.7)',
    padding: 15,
    borderRadius: 10,
    width: '80%',
    alignItems: 'center',
    marginBottom: 10,
  },
  signupButton: {
    backgroundColor: 'rgba(255, 255, 255, 0.5)',
    padding: 15,
    borderRadius: 10,
    width: '80%',
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },

  input: {
    backgroundColor: 'rgba(255, 255, 255, 0.3)',
    padding: 15,
    borderRadius: 10,
    width: '80%',
    marginBottom: 10,
    color: '#fff',
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

export default LoginScreen;

