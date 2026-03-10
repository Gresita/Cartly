import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

const ProductCard = ({ product }) => (
  <View style={styles.card}>
    <Image source={product.image} style={styles.image} />
    <Text style={styles.category}>{product.category}</Text>
    <Text style={styles.name}>{product.name}</Text>
    <Text style={styles.price}>{product.price}</Text>
  </View>
);

const styles = StyleSheet.create({
  card: {
    width: 180,
    backgroundColor: '#fff',
    borderRadius: 20,
    padding: 20,
    alignItems: 'center',
    shadowColor: '#182154',
    shadowOffset: { width: 0, height: 5 },
    shadowOpacity: 0.1,
    shadowRadius: 10,
    elevation: 6,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    
  },

  image: {
    width: 150,
    height: 150,
    borderRadius: 15,
    marginBottom: 15,
  },
  category: {
    fontSize: 12,
    color: '#6b6f8c',
    marginBottom: 5,
  },
  name: {
    fontWeight: '700',
    fontSize: 16,
    marginBottom: 5,
    color: '#182154',
    textAlign: 'center',
  },
  price: {
    fontWeight: '700',
    fontSize: 15,
    color: '#3950A6',
  },
});

export default ProductCard;