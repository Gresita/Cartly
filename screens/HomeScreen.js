import React from 'react';
import { ScrollView, StyleSheet } from 'react-native';

import HeroSection from '../components/HeroSection';
import FeaturedProducts from '../components/FeaturedProducts';
import CategorySection from '../components/CategorySection';
import BenefitsSection from '../components/BenefitsSection';

const featuredProducts = [
  {
    id: '1',
    category: 'Earbuds',
    name: 'Earbud Y168A',
    price: '$270.00 USD',
    image: require('../assets/Earbuds1.png'),
  },
  {
    id: '2',
    category: 'Headphones',
    name: 'Pro X168A',
    price: '$250.00 USD',
    image: require('../assets/headphones1.png'),
  },
  {
    id: '3',
    category: 'Wireless Charger',
    name: 'Wireless Charger P168A',
    price: '$240.00 USD',
    image: require('../assets/Wireless1.png'),
  },
];

const categories = [
  {
    id: 'cat1',
    title: 'Monitors',
    description: '',
    image: require('../assets/monitor1.png'),
  },
  {
    id: 'cat2',
    title: 'Accessories',
    description: '',
    image: require('../assets/maus1.png'),
  },
  {
    id: 'cat3',
    title: 'Wireless Charger',
    description: '',
    image: require('../assets/Wireless3.png'),
  },
  {
    id: 'cat4',
    title: 'Printers',
    description: '',
    image: require('../assets/printer1.png'),
  },
  
];

const handleSeeAllProducts = () => alert('Navigate to all products');
const handleViewAccessories = category => alert(`View accessories for category: ${category.title}`);

const HomeScreen = () => {
  return (
    <ScrollView style={styles.container}>
      <HeroSection />
      <FeaturedProducts products={featuredProducts} onSeeAll={handleSeeAllProducts} />
      <CategorySection categories={categories} onViewCategory={handleViewAccessories} />
      <BenefitsSection />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#ebeffb',
    flex: 1,
    paddingHorizontal: 40,
    paddingVertical: 30,
  },
});

export default HomeScreen;