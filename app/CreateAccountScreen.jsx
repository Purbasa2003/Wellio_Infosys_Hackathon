import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Image, Alert } from 'react-native';
import { registerUser } from '../api'; 

const CreateAccountScreen = ({ navigation }) => {
  const [username, setUsername] = useState('');
  const [dob, setDob] = useState('');
  const [phone, setPhone] = useState('');

  const handleSignUp = async () => {
    try {
      // Prepare user data
      const userData = {
        name: username,
        dateOfBirth: dob,
        phoneNumber: phone,
      };

      // Call the registerUser API
      const response = await registerUser(userData);

      // Handle successful registration
      console.log('User registered successfully:', response);
      Alert.alert('Success', 'User registered successfully!');

      // Navigate to the next screen (PreHome)
      navigation.navigate('PreHome');
    } catch (error) {
      // Handle errors
      console.error('Error registering user:', error);
      Alert.alert('Error', 'Failed to register user. Please try again.');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>WELLiO</Text>
      <Image
        source={require('../assets/Wellio_Logo_withbg.png')} // Update with your image
        style={styles.image}
      />
      <Text style={styles.subtitle}>wellness in optimization</Text>
      <Text style={styles.createAccount}>Create Account</Text>

      <TextInput
        style={styles.input}
        placeholder="User Name"
        value={username}
        onChangeText={setUsername}
      />
      <TextInput
        style={styles.input}
        placeholder="Date of birth (DD-MM-YYYY)"
        value={dob}
        onChangeText={setDob}
      />
      <TextInput
        style={styles.input}
        placeholder="Phone number"
        value={phone}
        onChangeText={setPhone}
        keyboardType="phone-pad"
      />
      <TouchableOpacity style={styles.button} onPress={handleSignUp}>
        <Text style={styles.buttonText}>Sign Up</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#9575CD', // Purple background
    padding: 20,
  },
  image: {
    width: 150,
    height: 150,
    marginBottom: 20,
  },
  title: {
    fontSize: 48,
    color: 'white',
    fontWeight: 'bold',
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 16,
    color: 'white',
    marginBottom: 20,
  },
  createAccount: {
    fontSize: 32,
    color: 'white',
    fontWeight: 'bold',
    marginBottom: 30,
  },
  input: {
    height: 50,
    width: '100%',
    backgroundColor: 'white',
    borderRadius: 10,
    paddingLeft: 15,
    marginBottom: 15,
    alignItems: 'center',
    elevation: 5,
  },
  button: {
    backgroundColor: '#D8B872', // Gold color
    padding: 15,
    marginHorizontal: 100,
    borderRadius: 50,
    width: '100%',
    alignItems: 'center',
    elevation: 5,
  },
  buttonText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default CreateAccountScreen;