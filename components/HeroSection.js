import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';

const HeroSection = () => {
  return (
    <View style={styles.container}>
      <View style={styles.textContainer}>
        <Text style={styles.title}>Elevate Your Audio Journey</Text>
        <Text style={styles.description}>
          Experience Sound In Its Purest Form. Morbi Justo Sem, Venenatis Sit Amet Tortor Id, Porttitor Facilisis Metus...
        </Text>
        <View style={styles.buttons}>
          <TouchableOpacity style={styles.primaryBtn} onPress={() => navigation.navigate('Products')}>
        <Text style={styles.primaryBtnText}>Shop Now</Text>
      </TouchableOpacity>
          <TouchableOpacity style={styles.secondaryBtn}>
            <Text style={styles.secondaryBtnText}>Learn More</Text>
          </TouchableOpacity>
        </View>
      </View>
      <Image
        source={{ uri: 'https://images.unsplash.com/photo-1511367461989-f85a21fda167?auto=format&fit=crop&w=400&q=80' }}
        style={styles.image}
        resizeMode="contain"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#3949AB',
    padding: 40,
    borderRadius: 15,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 50,
  },
  textContainer: {
    flex: 1,
    marginRight: 40,
  },
  title: {
    fontSize: 36,
    fontWeight: 'bold',
    color: 'white',
    marginBottom: 20,
  },
  description: {
    color: '#d0d3f3',
    fontSize: 16,
    marginBottom: 30,
    lineHeight: 24,
  },
  buttons: {
    flexDirection: 'row',
  },
  primaryBtn: {
    backgroundColor: '#283593',
    paddingVertical: 15,
    paddingHorizontal: 25,
    borderRadius: 8,
    marginRight: 20,
  },
  primaryBtnText: {
    color: 'white',
    fontWeight: 'bold',
  },
  secondaryBtn: {
    backgroundColor: '#3c50d6',
    paddingVertical: 15,
    paddingHorizontal: 25,
    borderRadius: 8,
  },
  secondaryBtnText: {
    color: '#c5cafc',
    fontWeight: 'bold',
  },
  image: {
    width: 280,
    height: 280,
    borderRadius: 15,
  },
});

export default HeroSection;