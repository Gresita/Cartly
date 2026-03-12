import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Alert } from 'react-native';

const RegisterScreen = ({ navigation }) => {
  const [form, setForm] = useState({
    fullName: '',
    email: '',
    password: '',
    confirmPassword: '',
  });

  const onChangeField = (field, value) => {
    setForm(prev => ({ ...prev, [field]: value }));
  };

  const onRegister = () => {
    if (!form.fullName || !form.email || !form.password || !form.confirmPassword) {
      Alert.alert('Error', 'Please fill all fields.');
      return;
    }
    if (form.password !== form.confirmPassword) {
      Alert.alert('Error', 'Passwords do not match.');
      return;
    }
    Alert.alert('Success', 'Registered successfully!');
    // Shto navigacion më vonë nëse dëshiron
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Create Account</Text>

      <TextInput
        style={styles.input}
        placeholder="Full Name"
        placeholderTextColor="#999"
        value={form.fullName}
        onChangeText={text => onChangeField('fullName', text)}
      />
      <TextInput
        style={styles.input}
        placeholder="Email"
        placeholderTextColor="#999"
        keyboardType="email-address"
        value={form.email}
        onChangeText={text => onChangeField('email', text)}
        autoCapitalize="none"
      />
      <TextInput
        style={styles.input}
        placeholder="Password"
        placeholderTextColor="#999"
        secureTextEntry
        value={form.password}
        onChangeText={text => onChangeField('password', text)}
      />
      <TextInput
        style={styles.input}
        placeholder="Confirm Password"
        placeholderTextColor="#999"
        secureTextEntry
        value={form.confirmPassword}
        onChangeText={text => onChangeField('confirmPassword', text)}
      />

      <TouchableOpacity style={styles.button} onPress={onRegister} activeOpacity={0.8}>
        <Text style={styles.buttonText}>Register</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#d6dbf6',  // sfondi pak më i thellë blu si në screenshot
    paddingHorizontal: 50,
    flex: 1,
    justifyContent: 'center',
  },
  title: {
    fontSize: 30,
    fontWeight: '700',
    color: '#283593',
    marginBottom: 30,
    textAlign: 'center',
  },
  input: {
    backgroundColor: 'white',
    height: 48,
    borderRadius: 24,
    paddingHorizontal: 16,
    fontSize: 16,
    marginBottom: 18,
    color: '#1a173b',
  },
  button: {
    backgroundColor: '#283593',
    height: 48,
    borderRadius: 24,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 16,
  },
  buttonText: {
    color: '#e0e7ff',
    fontWeight: '700',
    fontSize: 18,
  },
});

export default RegisterScreen;