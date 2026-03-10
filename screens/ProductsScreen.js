import React from 'react';
import { View, Text, FlatList, Image, StyleSheet, TouchableOpacity } from 'react-native';

// Produkte më të shumtë me imazhe nga assets
const products = [
  // Earbuds
  { id: '1', category: 'Earbuds', name: 'Earbud Y168A', price: '$270.00 USD', image: require('../assets/Earbuds1.png') },
  { id: '2', category: 'Earbuds', name: 'Earbud Y168B', price: '$240.00 USD', image: require('../assets/earbuds2.png') },
  { id: '3', category: 'Earbuds', name: 'Earbud Y168C', price: '$250.00 USD', image: require('../assets/earbuds3.png') },

  // Headphones
  { id: '4', category: 'Headphones', name: 'Pro X168A', price: '$350.00 USD', image: require('../assets/headphones1.png') },
  { id: '5', category: 'Headphones', name: 'Pro X168B', price: '$270.00 USD', image: require('../assets/headphones2.png') },
  { id: '6', category: 'Headphones', name: 'Pro X168C', price: '$250.00 USD', image: require('../assets/headphones3.png') },
  { id: '7', category: 'Headphones', name: 'Pro X168D', price: '$280.00 USD', image: require('../assets/headphones4.png') },

  // Wireless Chargers
  { id: '8', category: 'Wireless Charger', name: 'Wireless Charger A', price: '$90.00 USD', image: require('../assets/Wireless1.png') },
  { id: '9', category: 'Wireless Charger', name: 'Wireless Charger B', price: '$110.00 USD', image: require('../assets/Wireles2.png') },
  { id: '10', category: 'Wireless Charger', name: 'Wireless Charger C', price: '$95.00 USD', image: require('../assets/Wireless3.png') },
  { id: '11', category: 'Wireless Charger', name: 'Wireless Charger D', price: '$80.00 USD', image: require('../assets/Wireless4.png') },

  // Mouse (Maus)
  { id: '12', category: 'Accessories', name: 'Smart Mouse 1', price: '$35.00 USD', image: require('../assets/maus1.png') },
  { id: '13', category: 'Accessories', name: 'Smart Mouse 2', price: '$45.00 USD', image: require('../assets/maus2.png') },
  { id: '14', category: 'Accessories', name: 'Smart Mouse 3', price: '$55.00 USD', image: require('../assets/maus3.png') },

  // Monitors
  { id: '15', category: 'Accessories', name: 'HD Monitor 1', price: '$120.00 USD', image: require('../assets/monitor1.png') },
  { id: '16', category: 'Accessories', name: 'HD Monitor 2', price: '$110.00 USD', image: require('../assets/monitor2.png') },
  { id: '17', category: 'Accessories', name: 'HD Monitor 3', price: '$130.00 USD', image: require('../assets/monitor3.png') },

  // Printers
  { id: '18', category: 'Accessories', name: 'Compact Printer 1', price: '$80.00 USD', image: require('../assets/printer1.png') },
  { id: '19', category: 'Accessories', name: 'Compact Printer 2', price: '$75.00 USD', image: require('../assets/printer2.png') },
];

const ProductsScreen = ({ navigation }) => {
  const renderProduct = ({ item }) => (
    <TouchableOpacity style={styles.card} onPress={() => alert(`Selected: ${item.name}`)}>
      <Image source={item.image} style={styles.image} resizeMode="contain" />
      <Text style={styles.category}>{item.category}</Text>
      <Text style={styles.name}>{item.name}</Text>
      <Text style={styles.price}>{item.price}</Text>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.title}>All Products</Text>
      <FlatList
        data={products}
        renderItem={renderProduct}
        keyExtractor={(item) => item.id}
        numColumns={3}
        columnWrapperStyle={styles.row}
        contentContainerStyle={{ paddingBottom: 30 }}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 40,
    paddingTop: 30,
    backgroundColor: '#ebeffb',
    flex: 1,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 25,
    color: '#283593',
  },
  row: {
    justifyContent: 'space-between',
    marginBottom: 25,
  },
  card: {
    backgroundColor: 'white',
    borderRadius: 15,
    width: '30%',
    padding: 15,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 6,
    elevation: 3,
  },
  image: {
    width: '100%',
    height: 140,
    marginBottom: 15,
    borderRadius: 12,
  },
  category: {
    fontSize: 12,
    color: '#666',
    marginBottom: 5,
  },
  name: {
    fontWeight: 'bold',
    fontSize: 16,
    marginBottom: 5,
    color: '#1a173b',
    textAlign: 'center',
  },
  price: {
    color: '#283593',
    fontWeight: '600',
    fontSize: 14,
  },
});

export default ProductsScreen;