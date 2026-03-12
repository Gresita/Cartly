import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

const ProductCard = ({ product }) => (
  <View style={styles.card}>
    <Image source={{ uri: product.image }} style={styles.image} resizeMode="contain" />
    <Text style={styles.name} numberOfLines={2}>{product.title}</Text>
    <Text style={styles.price}>${product.price}</Text>
  </View>
);

const styles = StyleSheet.create({
  card: {
    width: 190,
    backgroundColor: '#fff',
    borderRadius: 15,
    padding: 15,
    margin: 8,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 6,
    shadowOffset: { width: 0, height: 3 },
    elevation: 4,
  },
  image: {
    width: 140,
    height: 140,
    borderRadius: 12,
    marginBottom: 10,
  },
  name: {
    fontWeight: 'bold',
    fontSize: 16,
    color: '#182154',
    marginBottom: 5,
    textAlign: 'center',
  },
  price: {
    fontSize: 14,
    fontWeight: '600',
    color: '#3950A6',
  },
});

export default ProductCard;