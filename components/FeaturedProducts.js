import React from 'react';
import { View, Text, TouchableOpacity, FlatList, StyleSheet } from 'react-native';
import ProductCard from './ProductCard';

const FeaturedProducts = ({ products, onSeeAll }) => {
  return (
    <View style={styles.container}>
      <View style={styles.headerRow}>
        <Text style={styles.title}>Featured Products</Text>
      </View>
      <FlatList
        data={products}
        horizontal
        showsHorizontalScrollIndicator={true}
        keyExtractor={item => item.id}
        renderItem={({ item }) => <ProductCard product={item} />}
        contentContainerStyle={styles.productsContainer}
        ItemSeparatorComponent={() => <View style={{ width: 15 }} />}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginBottom: 40,
    paddingLeft: 15,
    paddingRight: 15,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-evenly',
    alignItems: 'center',
  },
  headerRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20,
    alignItems: 'center',
    paddingHorizontal: 10,
  },
  title: {
    fontWeight: '700',
    fontSize: 22,
    color: '#182154',
  },
  seeAllText: {
    fontWeight: '600',
    fontSize: 14,
    color: '#3950A6',
  },
  productsContainer: {
    justifyContent: 'space-around',    // e rendit produktet me hapsirë të ndarë
    alignItems: 'center',
    paddingLeft: 5,
    paddingRight: 5,
  },
});

export default FeaturedProducts;