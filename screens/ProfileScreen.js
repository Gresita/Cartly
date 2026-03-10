import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, ScrollView, FlatList } from 'react-native';

const pastOrdersExample = [
  { id: 'o1', date: '2024-02-10', total: 540, status: 'Delivered' },
  { id: 'o2', date: '2024-03-15', total: 270, status: 'Processing' },
  { id: 'o3', date: '2024-04-01', total: 120, status: 'Cancelled' },
];

const ProfileScreen = () => {
  const [user, setUser] = useState({
    fullName: 'John Doe',
    email: 'john@example.com',
    phone: '+1234567890',
    address: '123 Main St, Cityville',
  });

  const onChangeField = (field, value) => {
    setUser((prev) => ({ ...prev, [field]: value }));
  };

  const renderOrder = ({ item }) => (
    <View style={styles.orderItem}>
      <Text style={styles.orderDate}>{item.date}</Text>
      <Text style={styles.orderTotal}>${item.total}.00 USD</Text>
      <Text style={[styles.orderStatus, item.status === 'Delivered' ? styles.statusDelivered : item.status === 'Processing' ? styles.statusProcessing : styles.statusCancelled]}>
        {item.status}
      </Text>
    </View>
  );

  return (
    <ScrollView style={styles.container} keyboardShouldPersistTaps="handled">
      <Text style={styles.title}>My Profile</Text>

      <TextInput
        style={styles.input}
        placeholder="Full Name"
        value={user.fullName}
        onChangeText={(text) => onChangeField('fullName', text)}
      />
      <TextInput
        style={styles.input}
        placeholder="Email"
        value={user.email}
        keyboardType="email-address"
        onChangeText={(text) => onChangeField('email', text)}
      />
      <TextInput
        style={styles.input}
        placeholder="Phone"
        value={user.phone}
        keyboardType="phone-pad"
        onChangeText={(text) => onChangeField('phone', text)}
      />
      <TextInput
        style={styles.input}
        placeholder="Address"
        value={user.address}
        onChangeText={(text) => onChangeField('address', text)}
      />

      <Text style={styles.ordersTitle}>Past Orders</Text>
      <FlatList
        data={pastOrdersExample}
        keyExtractor={item => item.id}
        renderItem={renderOrder}
        ItemSeparatorComponent={() => <View style={styles.separator} />}
      />
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
  ordersTitle: {
    fontSize: 22,
    fontWeight: 'bold',
    marginTop: 30,
    marginBottom: 15,
    color: '#383868',
  },
  orderItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: 'white',
    padding: 15,
    borderRadius: 10,
  },
  orderDate: {
    fontSize: 14,
    color: '#555',
  },
  orderTotal: {
    fontWeight: 'bold',
    fontSize: 14,
    color: '#1a173b',
  },
  orderStatus: {
    fontWeight: 'bold',
    fontSize: 14,
    paddingHorizontal: 8,
    borderRadius: 12,
    textAlignVertical: 'center',
  },
  statusDelivered: {
    backgroundColor: '#d5f5e3',
    color: '#27ae60',
  },
  statusProcessing: {
    backgroundColor: '#fdf2e9',
    color: '#f39c12',
  },
  statusCancelled: {
    backgroundColor: '#f8d7da',
    color: '#c0392b',
  },
  separator: {
    height: 15,
  },
});

export default ProfileScreen;