import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';

const CategoryCard = ({ category, onPress }) => (
  <View style={styles.card}>
    <Text style={styles.title}>{category.title}</Text>
    <Text style={styles.description}>{category.description}</Text>
    <TouchableOpacity onPress={onPress}>
      <Text style={styles.link}>View Accessories &gt;</Text>
    </TouchableOpacity>
    <Image source={category.image} style={styles.image} resizeMode="contain" />
  </View>
);

const CategorySection = ({ categories, onViewCategory }) => (
  <View style={styles.container}>
    <Text style={styles.sectionTitle}>Shop By Category</Text>
    <View style={styles.cardContainer}>
      {categories.map((cat) => (
        <CategoryCard
          key={cat.id}
          category={cat}
          onPress={() => onViewCategory(cat)}
        />
      ))}
    </View>
  </View>
);

const styles = StyleSheet.create({
  container: {
    marginBottom: 40,
    paddingHorizontal: 10,
  },
  sectionTitle: {
    fontSize: 22,
    fontWeight: '700',
    marginBottom: 20,
    color: '#182154',
  },
  cardContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  card: {
    backgroundColor: '#ffffff',
    width: 220,
    borderRadius: 15,
    padding: 20,
    shadowColor: '#182154',
    shadowOpacity: 0.1,
    shadowRadius: 12,
    shadowOffset: { width: 0, height: 4 },
    elevation: 4,
  },
  title: {
    color: '#182154',
    fontWeight: '700',
    fontSize: 18,
    marginBottom: 8,
  },
  description: {
    fontSize: 13,
    color: '#767991',
    marginBottom: 15,
  },
  link: {
    color: '#3950A6',
    fontWeight: '600',
    marginBottom: 15,
    fontSize: 14,
  },
  image: {
    width: '100%',
    height: 100,
    borderRadius: 12,
  },
});

export default CategorySection;