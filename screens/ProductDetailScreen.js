import React, { useContext } from 'react';
import { ScrollView, View, Text, Image, StyleSheet, TouchableOpacity, Dimensions } from 'react-native';
import { CartContext } from '../context/CartContext';

const screenHeight = Dimensions.get('window').height;

const ProductDetailScreen = ({ route, navigation }) => {

  const { product } = route.params;
  const { addToCart } = useContext(CartContext);

  const handleAddToCart = () => {
    addToCart(product);
    alert(`${product.title} u shtua në shportë!`);
  };

  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContainer}>

        <View style={styles.contentWrapper}>

          <View style={styles.imageContainer}>
            <Image
              source={{ uri: product.image }}
              style={styles.productImage}
              resizeMode="contain"
            />
          </View>

          <View style={styles.infoContainer}>

            <Text style={styles.category}>{product.category}</Text>

            <Text style={styles.title}>
              {product.title}
            </Text>

            <Text style={styles.price}>
              ${product.price.toFixed(2)}
            </Text>

            <Text style={styles.sectionTitle}>Përshkrimi</Text>

            <Text style={styles.description}>
              Ky produkt është i dizajnuar me cilësi të lartë dhe ofron performancë të shkëlqyer.
              Përshtatet për përdorim të përditshëm dhe garantohet me garancion.
            </Text>

            <TouchableOpacity style={styles.button} onPress={handleAddToCart}>
              <Text style={styles.buttonText}>Shto në Shportë</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()}>
              <Text style={styles.backButtonText}>Kthehu</Text>
            </TouchableOpacity>

          </View>
        </View>

      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({

  container: {
    height: screenHeight,
    backgroundColor: '#f7f9ff',
  },

  scrollContainer: {
    flexGrow: 1,
    padding: 25,
    justifyContent: 'center',
  },

  contentWrapper: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },

  imageContainer: {
    width: '45%',
    justifyContent: 'center',
    alignItems: 'center',
  },

  productImage: {
    width: '100%',
    height: 320,
    borderRadius: 15,
  },

  infoContainer: {
    width: '50%',
  },

  category: {
    fontSize: 14,
    color: '#8d93b3',
    marginBottom: 10,
    textTransform: 'capitalize',
  },

  title: {
    fontSize: 26,
    fontWeight: 'bold',
    color: '#344376',
    marginBottom: 15,
  },

  price: {
    fontSize: 28,
    fontWeight: '700',
    color: '#3950a6',
    marginBottom: 25,
  },

  sectionTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: '#283593',
    marginBottom: 10,
  },

  description: {
    fontSize: 16,
    lineHeight: 24,
    color: '#5e6278',
    marginBottom: 35,
  },

  button: {
    backgroundColor: '#3950a6',
    paddingVertical: 16,
    borderRadius: 12,
    alignItems: 'center',
    marginBottom: 15,
  },

  buttonText: {
    color: '#f0f3ff',
    fontWeight: 'bold',
    fontSize: 18,
  },

  backButton: {
    alignItems: 'center',
  },

  backButtonText: {
    color: '#3950a6',
    fontWeight: '600',
    fontSize: 16,
    textDecorationLine: 'underline',
  },
});

export default ProductDetailScreen;