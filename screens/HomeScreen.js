import React, { useEffect, useState } from 'react';
import { ScrollView, StyleSheet, View, ActivityIndicator, Text } from 'react-native';
import HeroSection from '../components/HeroSection';
import FeaturedProducts from '../components/FeaturedProducts';
import CategorySection from '../components/CategorySection';
import BenefitsSection from '../components/BenefitsSection';

// Skedari i shërbimit API
import { fetchData } from '../services/api';

const HomeScreen = () => {
  const [featuredProducts, setFeaturedProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const loadData = async () => {
      try {
        const products = await fetchData('/products');
        setFeaturedProducts(products.slice(0, 3)); // marrë tri produkte
        // krijo kategori unike
        const cats = [...new Set(products.map(p => p.category))].slice(0, 4).map((cat, i) => ({
          id: i.toString(),
          title: cat.charAt(0).toUpperCase() + cat.slice(1),
          description: `Shiko të gjitha produktet në ${cat}`,
          image: `https://via.placeholder.com/150?text=${cat}`
        }));
        setCategories(cats);
      } catch (err) {
        setError(err.message);
        console.error(err);
      } finally {
        setLoading(false);
      }
    };
    loadData();
  }, []);

  if (loading) {
    return (
      <View style={styles.center}>
        <ActivityIndicator size="large" color="#3950A6" />
        <Text>Po ngarkohen të dhënat...</Text>
      </View>
    );
  }

  if (error) {
    return (
      <View style={styles.center}>
        <Text style={{ color: 'red' }}>Gabim: {error}</Text>
      </View>
    );
  }

  return (
    <ScrollView style={styles.container}>
      <HeroSection />
      <FeaturedProducts products={featuredProducts} onSeeAll={() => alert('Se all clicked')} />
      <CategorySection categories={categories} onViewCategory={cat => alert(`Selected: ${cat.title}`)} />
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
  center: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default HomeScreen;