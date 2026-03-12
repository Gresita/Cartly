import React, { useContext } from 'react';
import { View, Text, FlatList, Image, StyleSheet, TouchableOpacity, Alert } from 'react-native';
import { CartContext } from '../context/CartContext';

const CartScreen = ({ navigation }) => {
  const { cartItems, incrementQuantity, decrementQuantity, removeItem } = useContext(CartContext);

  const totalPrice = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);

  const renderItem = ({ item }) => (
    <View style={styles.cartItem}>
      <Image source={{ uri: item.image }} style={styles.productImage} />
      <View style={styles.infoContainer}>
        <Text style={styles.productName}>{item.name}</Text>
        <Text style={styles.priceText}>${item.price.toFixed(2)}</Text>
        <View style={styles.quantityContainer}>
          <TouchableOpacity style={styles.qtyButton} onPress={() => decrementQuantity(item.id)}>
            <Text style={styles.qtyButtonText}>-</Text>
          </TouchableOpacity>
          <Text style={styles.quantityText}>{item.quantity}</Text>
          <TouchableOpacity style={styles.qtyButton} onPress={() => incrementQuantity(item.id)}>
            <Text style={styles.qtyButtonText}>+</Text>
          </TouchableOpacity>
        </View>
      </View>
      <TouchableOpacity onPress={() => {
        Alert.alert(
          'Remove item',
          'Are you sure you want to remove this item from cart?',
          [
            { text: 'Cancel', style: 'cancel' },
            { text: 'Remove', style: 'destructive', onPress: () => removeItem(item.id) }
          ]
        );
      }} style={styles.removeButton}>
        <Text style={styles.removeButtonText}>X</Text>
      </TouchableOpacity>
    </View>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Your Cart</Text>
      {cartItems.length === 0 ? (
        <Text style={styles.emptyText}>Your cart is empty.</Text>
      ) : (
        <FlatList
          data={cartItems}
          renderItem={renderItem}
          keyExtractor={(item) => item.id.toString()}
          contentContainerStyle={{ paddingBottom: 20 }}
        />
      )}

      <View style={styles.footer}>
        <Text style={styles.totalText}>Total: ${totalPrice.toFixed(2)}</Text>
        <TouchableOpacity
          style={[styles.checkoutButton, { opacity: cartItems.length === 0 ? 0.5 : 1 }]}
          disabled={cartItems.length === 0}
          onPress={() => navigation.navigate('Checkout')}
        >
          <Text style={styles.checkoutButtonText}>Proceed to Checkout</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, padding: 40, backgroundColor: '#E7E9F4' },
  title: { fontSize: 28, fontWeight: 'bold', color: '#1a173b', marginBottom: 30 },
  emptyText: { color: '#777', fontSize: 16, textAlign: 'center', marginTop: 50 },
  cartItem: { flexDirection: 'row', backgroundColor: 'white', borderRadius: 15, padding: 10, marginBottom: 15, alignItems: 'center' },
  productImage: { width: 90, height: 90, borderRadius: 12, marginRight: 15 },
  infoContainer: { flex: 1 },
  productName: { fontWeight: 'bold', fontSize: 18, marginBottom: 5, color: '#1a173b' },
  priceText: { color: '#283593', fontWeight: '600', marginBottom: 10 },
  quantityContainer: { flexDirection: 'row', alignItems: 'center' },
  qtyButton: { backgroundColor: '#283593', borderRadius: 6, paddingHorizontal: 12, paddingVertical: 4 },
  qtyButtonText: { color: 'white', fontWeight: 'bold', fontSize: 20 },
  quantityText: { marginHorizontal: 15, fontSize: 18, fontWeight: 'bold', color: '#1a173b' },
  removeButton: { paddingHorizontal: 10 },
  removeButtonText: { fontSize: 20, color: '#ff4444', fontWeight: 'bold' },
  footer: { borderTopWidth: 1, borderColor: '#ccc', paddingTop: 20 },
  totalText: { fontSize: 22, fontWeight: 'bold', color: '#1a173b', marginBottom: 20, textAlign: 'right' },
  checkoutButton: { backgroundColor: '#283593', paddingVertical: 16, borderRadius: 10, alignItems: 'center' },
  checkoutButtonText: { color: 'white', fontWeight: 'bold', fontSize: 18 },
});

export default CartScreen;