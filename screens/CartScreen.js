import React, { useState } from 'react';
import { View, Text, FlatList, StyleSheet, TouchableOpacity, Image, Alert } from 'react-native';

const initialCartItems = [
  {
    id: '1',
    name: 'Earbud Y168A',
    price: 270,
    quantity: 1,
    image: 'https://via.placeholder.com/150?text=Earbud',
  },
  {
    id: '2',
    name: 'Pro X168A',
    price: 250,
    quantity: 2,
    image: 'https://via.placeholder.com/150?text=Headphones',
  },
];

const CartScreen = ({ navigation }) => {
  const [cartItems, setCartItems] = useState(initialCartItems);

  const incrementQuantity = (id) => {
    setCartItems((items) =>
      items.map((item) =>
        item.id === id ? { ...item, quantity: item.quantity + 1 } : item
      )
    );
  };

  const decrementQuantity = (id) => {
    setCartItems((items) =>
      items
        .map((item) =>
          item.id === id && item.quantity > 1
            ? { ...item, quantity: item.quantity - 1 }
            : item
        )
        .filter((item) => item.quantity > 0)
    );
  };

  const removeItem = (id) => {
    Alert.alert(
      'Remove item',
      'Are you sure you want to remove this item from cart?',
      [
        { text: 'Cancel', style: 'cancel' },
        {
          text: 'Remove',
          style: 'destructive',
          onPress: () => {
            setCartItems(items => items.filter(item => item.id !== id));
          },
        },
      ]
    );
  };

  const totalPrice = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  const renderItem = ({ item }) => (
    <View style={styles.cartItem}>
      <Image source={{ uri: item.image }} style={styles.productImage} />
      <View style={styles.infoContainer}>
        <Text style={styles.productName}>{item.name}</Text>
        <Text style={styles.priceText}>${item.price}.00</Text>
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
      <TouchableOpacity onPress={() => removeItem(item.id)} style={styles.removeButton}>
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
          keyExtractor={(item) => item.id}
          contentContainerStyle={{ paddingBottom: 20 }}
        />
      )}

      <View style={styles.footer}>
        <Text style={styles.totalText}>Total: ${totalPrice}.00</Text>
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
  container: {
    flex: 1,
    padding: 40,
    backgroundColor: '#E7E9F4',
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#1a173b',
    marginBottom: 30,
  },
  emptyText: {
    color: '#777',
    fontSize: 16,
    textAlign: 'center',
    marginTop: 50,
  },
  cartItem: {
    flexDirection: 'row',
    backgroundColor: 'white',
    borderRadius: 15,
    padding: 10,
    marginBottom: 15,
    alignItems: 'center',
  },
  productImage: {
    width: 90,
    height: 90,
    borderRadius: 12,
    marginRight: 15,
  },
  infoContainer: {
    flex: 1,
  },
  productName: {
    fontWeight: 'bold',
    fontSize: 18,
    marginBottom: 5,
    color: '#1a173b',
  },
  priceText: {
    color: '#283593',
    fontWeight: '600',
    marginBottom: 10,
  },
  quantityContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  qtyButton: {
    backgroundColor: '#283593',
    borderRadius: 6,
    paddingHorizontal: 12,
    paddingVertical: 4,
  },
  qtyButtonText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 20,
  },
  quantityText: {
    marginHorizontal: 15,
    fontSize: 18,
    fontWeight: 'bold',
    color: '#1a173b',
  },
  removeButton: {
    paddingHorizontal: 10,
  },
  removeButtonText: {
    fontSize: 20,
    color: '#ff4444',
    fontWeight: 'bold',
  },
  footer: {
    borderTopWidth: 1,
    borderColor: '#ccc',
    paddingTop: 20,
  },
  totalText: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#1a173b',
    marginBottom: 20,
    textAlign: 'right',
  },
  checkoutButton: {
    backgroundColor: '#283593',
    paddingVertical: 16,
    borderRadius: 10,
    alignItems: 'center',
  },
  checkoutButtonText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 18,
  },
});

export default CartScreen;