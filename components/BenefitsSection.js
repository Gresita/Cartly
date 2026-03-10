import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';

const benefits = [
  {
    icon: require('../assets/free-delivery.png'),
    title: 'Free Delivery',
    description: 'Lorem Ipsum Dolor Sit Amet, Consectetur Adipiscing Elit...',
  },
  {
    icon: require('../assets/self-pickup.png'),
    title: 'Self Pickup',
    description: 'Etiam Vitae Ornare Nulla. Class Aptent Taciti Sociosqu...',
  },
  {
    icon: require('../assets/warranty.png'),
    title: 'Warranty',
    description: 'Donec Vehicula Et Nulla Vel Fringilla. Proin Viverra...',
  },
];

const BenefitsSection = () => (
  <View style={styles.container}>
    <Text style={styles.title}>Experience Streamlined Shopping With Crescendo</Text>
    <View style={styles.benefitsRow}>
      {benefits.map((item, idx) => (
        <View key={idx} style={styles.benefitItem}>
          <Image source={item.icon} style={styles.icon} />
          <Text style={styles.benefitTitle}>{item.title}</Text>
          <Text style={styles.benefitDescription}>{item.description}</Text>
        </View>
      ))}
    </View>
    <TouchableOpacity style={styles.shopBtn}>
      <Text style={styles.shopBtnText}>Shop Now</Text>
    </TouchableOpacity>
  </View>
);

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#f4f7ff',
    borderRadius: 15,
    paddingVertical: 40,
    paddingHorizontal: 20,
    alignItems: 'center',
    marginHorizontal: 10,
  },
  title: {
    fontWeight: '700',
    fontSize: 20,
    marginBottom: 50,
    color: '#182154',
    textAlign: 'center',
  },
  benefitsRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    marginBottom: 45,
  },
  benefitItem: {
    width: '30%',
    alignItems: 'center',
  },
  icon: {
    width: 52,
    height: 52,
    marginBottom: 16,
    tintColor: '#3950A6',
  },
  benefitTitle: {
    fontWeight: '700',
    fontSize: 16,
    marginBottom: 12,
    color: '#182154',
  },
  benefitDescription: {
    fontSize: 13,
    color: '#5C5E75',
    textAlign: 'center',
    lineHeight: 18,
  },
  shopBtn: {
    backgroundColor: '#3950A6',
    paddingVertical: 18,
    paddingHorizontal: 70,
    borderRadius: 14,
  },
  shopBtnText: {
    color: 'white',
    fontWeight: '700',
    fontSize: 16,
  },
});

export default BenefitsSection;