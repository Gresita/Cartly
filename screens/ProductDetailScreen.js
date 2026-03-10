import React, { useState } from 'react';
import { View, Text, Image, StyleSheet, ScrollView, TouchableOpacity, Dimensions } from 'react-native';

const { width } = Dimensions.get('window');

const imagesSample = [
  'https://via.placeholder.com/400x400?text=Image+1',
  'https://via.placeholder.com/400x400?text=Image+2',
  'https://via.placeholder.com/400x400?text=Image+3',
];

const ProductDetailScreen = ({ route, navigation }) => {
  const { product } = route.params;

  const [selectedImageIndex, setSelectedImageIndex] = useState(0);

  return (
    <ScrollView style={styles.container} contentContainerStyle={{ paddingBottom: 40 }}>
      {/* Emri dhe Kategoria */}
      <Text style={styles.category}>{product.category}</Text>
      <Text style={styles.productName}>{product.name}</Text>

      {/* Carousel Imazhe */}
      <View style={styles.imageCarousel}>
        <Image
          source={{ uri: imagesSample[selectedImageIndex] || product.image }}
          style={styles.mainImage}
          resizeMode="contain"
        />
        <View style={styles.thumbnailContainer}>
          {imagesSample.map((img, idx) => (
            <TouchableOpacity key={idx} onPress={() => setSelectedImageIndex(idx)}>
              <Image source={{ uri: img }} style={[styles.thumbnail, selectedImageIndex === idx && styles.selectedThumbnail]} />
            </TouchableOpacity>
          ))}
        </View>
      </View>

      {/* Përshkrimi */}
      <Text style={styles.description}>
        Morbi justo sem, venenatis sit amet tortor id, porttitor facilisis metus. Ut scelerisque mauris vivamus
        fringilla elit eu felis iaculis cursus. Integer ullamcorper libero vel orci tristique, in ullamcorper est luctus.
      </Text>

      {/* Çmimi */}
      <Text style={styles.price}>Price: ${product.price}.00 USD</Text>

      {/* Butoni për Shtim në Shportë */}
      <TouchableOpacity style={styles.addButton} onPress={() => navigation.navigate('Cart')}>
        <Text style={styles.addButtonText}>Add to Cart</Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#E7E9F4',
    flex: 1,
    padding: 40,
  },
  category: {
    fontSize: 14,
    color: '#777',
    marginBottom: 5,
  },
  productName: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#1a173b',
    marginBottom: 20,
  },
  imageCarousel: {
    marginBottom: 30,
  },
  mainImage: {
    width: width - 80,
    height: width - 80,
    borderRadius: 15,
    backgroundColor: 'white',
  },
  thumbnailContainer: {
    flexDirection: 'row',
    marginTop: 15,
    justifyContent: 'center',
  },
  thumbnail: {
    width: 80,
    height: 80,
    borderRadius: 10,
    marginHorizontal: 10,
    opacity: 0.6,
    borderWidth: 1,
    borderColor: 'transparent',
  },
  selectedThumbnail: {
    opacity: 1,
    borderColor: '#283593',
  },
  description: {
    fontSize: 16,
    color: '#1a173b',
    lineHeight: 24,
    marginBottom: 25,
  },
  price: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#283593',
    marginBottom: 25,
  },
  addButton: {
    backgroundColor: '#283593',
    borderRadius: 12,
    paddingVertical: 15,
    alignItems: 'center',
    width: '100%',
  },
  addButtonText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 18,
  },
});

export default ProductDetailScreen;