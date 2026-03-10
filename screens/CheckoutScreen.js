import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet, TouchableOpacity, ScrollView, Alert } from 'react-native';

const CheckoutScreen = ({ navigation }) => {
  const [form, setForm] = useState({
    fullName: '',
    email: '',
    phone: '',
    address: '',
    city: '',
    postalCode: '',
    paymentMethod: '',
  });

  const onChangeField = (field, value) => {
    setForm((prev) => ({ ...prev, [field]: value }));
  };

  const onSubmit = () => {
    // Simple validimi bazik
    if (!form.fullName || !form.email || !form.address || !form.paymentMethod) {
      Alert.alert('Error', 'Please fill all required fields.');
      return;
    }
    Alert.alert('Success', 'Your order has been placed!');
    navigation.navigate('Home');
  };

  return (
    <ScrollView style={styles.container} keyboardShouldPersistTaps="handled">
      <Text style={styles.title}>Checkout</Text>

      {/* Forma për detajet e porositësit */}
      <TextInput
        style={styles.input}
        placeholder="Full Name*"
        value={form.fullName}
        onChangeText={(text) => onChangeField('fullName', text)}
      />
      <TextInput
        style={styles.input}
        placeholder="Email*"
        value={form.email}
        keyboardType="email-address"
        onChangeText={(text) => onChangeField('email', text)}
      />
      <TextInput
        style={styles.input}
        placeholder="Phone"
        value={form.phone}
        keyboardType="phone-pad"
        onChangeText={(text) => onChangeField('phone', text)}
      />
      <TextInput
        style={styles.input}
        placeholder="Address*"
        value={form.address}
        onChangeText={(text) => onChangeField('address', text)}
      />
      <TextInput
        style={styles.input}
        placeholder="City"
        value={form.city}
        onChangeText={(text) => onChangeField('city', text)}
      />
      <TextInput
        style={styles.input}
        placeholder="Postal Code"
        value={form.postalCode}
        onChangeText={(text) => onChangeField('postalCode', text)}
      />

      {/* Metoda e pagesës (thjesht një input tekst për shembull) */}
      <TextInput
        style={styles.input}
        placeholder="Payment Method* (e.g. Credit Card)"
        value={form.paymentMethod}
        onChangeText={(text) => onChangeField('paymentMethod', text)}
      />

      <TouchableOpacity style={styles.submitButton} onPress={onSubmit}>
        <Text style={styles.submitButtonText}>Place Order</Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#E7E9F4',
    flex: 1,
    padding: 40,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#1a173b',
    marginBottom: 30,
  },
  input: {
    backgroundColor: 'white',
    borderRadius: 10,
    paddingHorizontal: 15,
    paddingVertical: 15,
    fontSize: 16,
    marginBottom: 20,
  },
  submitButton: {
    backgroundColor: '#283593',
    padding: 18,
    borderRadius: 10,
    alignItems: 'center',
    marginTop: 10,
  },
  submitButtonText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 18,
  },
});

export default CheckoutScreen;