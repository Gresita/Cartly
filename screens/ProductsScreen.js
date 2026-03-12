import React, { useEffect, useState } from 'react';
import {
  View,
  Text,
  FlatList,
  Image,
  StyleSheet,
  ActivityIndicator,
  TouchableOpacity,
  Dimensions,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { fetchData } from '../services/api';

const { width } = Dimensions.get('window');
const CARD_MARGIN = 12;
const NUM_COLUMNS = 2;
const CARD_WIDTH = (width - (CARD_MARGIN * (NUM_COLUMNS + 1))) / NUM_COLUMNS;

const ProductsScreen = () => {
  const navigation = useNavigation();
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedCategory, setSelectedCategory] = useState('');

  useEffect(() => {
    const loadProducts = async () => {
      try {
        const data = await fetchData('/products');
        setProducts(data);
        setFilteredProducts(data);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    };
    loadProducts();
  }, []);

  const filterByCategory = (category) => {
    setSelectedCategory(category);
    if (!category) {
      setFilteredProducts(products);
      return;
    }
    const filtered = products.filter((prod) => prod.category === category);
    setFilteredProducts(filtered);
  };

  const categories = [...new Set(products.map((p) => p.category))];

  if (loading) {
    return (
      <View style={styles.loading}>
        <ActivityIndicator size="large" color="#3950A6" />
      </View>
    );
  }

  const renderProduct = ({ item }) => (
    <TouchableOpacity
      onPress={() => navigation.navigate('ProductDetail', { product: item })}
      activeOpacity={0.85}
      style={[styles.card, { width: CARD_WIDTH, marginLeft: CARD_MARGIN }]}
    >
      <Image source={{ uri: item.image }} style={styles.image} resizeMode="contain" />
      <Text style={styles.name} numberOfLines={2}>
        {item.title}
      </Text>
      <Text style={styles.price}>${item.price}</Text>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Products</Text>
      <View style={styles.categoryContainer}>
        <TouchableOpacity
          style={[
            styles.categoryButton,
            selectedCategory === '' && styles.categoryButtonActive,
          ]}
          onPress={() => filterByCategory('')}
        >
          <Text
            style={[
              styles.categoryButtonText,
              selectedCategory === '' && styles.categoryButtonTextActive,
            ]}
          >
            All
          </Text>
        </TouchableOpacity>
        {categories.map((cat) => (
          <TouchableOpacity
            key={cat}
            style={[
              styles.categoryButton,
              selectedCategory === cat && styles.categoryButtonActive,
            ]}
            onPress={() => filterByCategory(cat)}
          >
            <Text
              style={[
                styles.categoryButtonText,
                selectedCategory === cat && styles.categoryButtonTextActive,
              ]}
            >
              {cat}
            </Text>
          </TouchableOpacity>
        ))}
      </View>

      <FlatList
        data={filteredProducts}
        keyExtractor={(item) => item.id.toString()}
        renderItem={renderProduct}
        numColumns={NUM_COLUMNS}
        columnWrapperStyle={{ justifyContent: 'flex-start' }}
        contentContainerStyle={{ paddingBottom: 40 }}
        showsVerticalScrollIndicator={false}
        ListEmptyComponent={<Text style={styles.noProducts}>No products found</Text>}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#f0f4ff', padding: CARD_MARGIN },
  loading: { flex: 1, justifyContent: 'center', alignItems: 'center' },
  header: { fontSize: 28, fontWeight: 'bold', marginBottom: 20, color: '#283593' },
  categoryContainer: {
    flexDirection: 'row',
    marginBottom: 20,
    paddingLeft: CARD_MARGIN,
  },
  categoryButton: {
    paddingVertical: 8,
    paddingHorizontal: 18,
    borderRadius: 20,
    backgroundColor: '#d1dbff',
    marginRight: 12,
  },
  categoryButtonActive: {
    backgroundColor: '#3950a6',
  },
  categoryButtonText: {
    fontWeight: '600',
    color: '#293a90',
    fontSize: 14,
  },
  categoryButtonTextActive: {
    color: '#fff',
  },
  card: {
    backgroundColor: '#fff',
    borderRadius: 16,
    padding: 15,
    alignItems: 'center',
    marginBottom: 20,
    // shadow efekti per theksim
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 6,
    shadowOffset: { width: 0, height: 3 },
    elevation: 4,
  },
  image: {
    width: '100%',
    height: 160,
    borderRadius: 12,
    marginBottom: 12,
  },
  name: {
    fontWeight: '700',
    fontSize: 15,
    color: '#182154',
    marginBottom: 6,
    textAlign: 'center',
  },
  price: {
    fontWeight: '700',
    fontSize: 14,
    color: '#3950A6',
  },
  noProducts: {
    textAlign: 'center',
    color: '#777',
    fontSize: 16,
    marginTop: 50,
  },
});

export default ProductsScreen;