import React, { useEffect, useState } from 'react';
import { ScrollView, StyleSheet, View, ActivityIndicator, Text } from 'react-native';

import HeroSection from '../components/HeroSection';
import FeaturedProducts from '../components/FeaturedProducts';
import CategorySection from '../components/CategorySection';
import BenefitsSection from '../components/BenefitsSection';

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

        setFeaturedProducts(products.slice(0,5));

        const uniqueCategories = [...new Set(products.map(p => p.category))];

        const cats = uniqueCategories.slice(0,4).map((cat, i) => {

          const product = products.find(p => p.category === cat);

          return {
            id: i.toString(),
            title: cat.charAt(0).toUpperCase() + cat.slice(1),
            description: `Browse ${cat} products`,
            image: product?.image   // foto reale nga API
          };

        });

        setCategories(cats);

      } catch(err){

        setError(err.message);

      } finally{

        setLoading(false);

      }

    };

    loadData();

  }, []);

  if (loading) {
    return (
      <View style={styles.center}>
        <ActivityIndicator size="large" color="#3950A6" />
        <Text>Loading Cartly...</Text>
      </View>
    );
  }

  if (error) {
    return (
      <View style={styles.center}>
        <Text style={{ color: 'red' }}>Error: {error}</Text>
      </View>
    );
  }

  return (
    <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>

      <HeroSection />

      <FeaturedProducts
        products={featuredProducts}
        onSeeAll={() => alert('View all products')}
      />

      <CategorySection
        categories={categories}
        onViewCategory={cat => alert(`Selected ${cat.title}`)}
      />

      <BenefitsSection />

    </ScrollView>
  );
};

const styles = StyleSheet.create({

  container:{
    backgroundColor:'#f4f6ff',
    flex:1,
    paddingHorizontal:25,
    paddingVertical:25
  },

  center:{
    flex:1,
    justifyContent:'center',
    alignItems:'center'
  }

});

export default HomeScreen;