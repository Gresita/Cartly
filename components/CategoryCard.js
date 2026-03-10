import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';

const CategoryCard = ({ category, onView }) => (
  <View style={styles.card}>
    <Text style={styles.title}>{category.title}</Text>
    <Text style={styles.description}>{category.description}</Text>
    <TouchableOpacity onPress={onView}>
      <Text style={styles.link}>View Accessories &gt;</Text>
    </TouchableOpacity>
    <Image source={category.image} style={styles.image} resizeMode="contain" />
  </View>
);

const styles = StyleSheet.create({
  card: {
    width: 220,
    backgroundColor: '#eff2ff',
    borderRadius: 20,
    padding: 25,
    justifyContent: 'space-between',
    marginRight: 25,
    shadowColor: '#000',
    shadowOpacity: 0.08,
    shadowOffset: { width: 0, height: 3 },
    shadowRadius: 7,
    elevation: 3,
  },
  title: {
    fontSize: 20,
    fontWeight: '700',
    color: '#222',
    marginBottom: 12,
  },
  description: {
    fontSize: 14,
    color: '#666',
    marginBottom: 18,
  },
  link: {
    fontSize: 15,
    color: '#3950A6',
    fontWeight: '600',
    marginBottom: 15,
  },
  image: {
    width: '100%',
    height: 120,
    borderRadius: 15,
  },
  cardContainer: {
    flexDirection: 'row',
    gap: 20,
    paddingLeft: 10,
  },
  categoryCard: {
    width: 180,
    backgroundColor: '#f9faff',
    borderRadius: 16,
    padding: 20,
    marginRight: 15,
    shadowColor: '#000',
    shadowOpacity: 0.08,
    shadowRadius: 8,
    elevation: 3,
  },
  categoryImage: {
    width: '100%',
    height: 110,
    borderRadius: 14,
  },
});

export default CategoryCard;