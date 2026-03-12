import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const HeroSection = () => {

  const navigation = useNavigation();

  return (

    <View style={styles.hero}>

      <Text style={styles.title}>
        Welcome to Cartly
      </Text>

      <Text style={styles.subtitle}>
        Discover products across multiple categories and shop easily
        from one place. Cartly helps you find what you need faster.
      </Text>

      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('Products')}
      >
        <Text style={styles.buttonText}>
          Explore Products
        </Text>
      </TouchableOpacity>

    </View>

  );

};

const styles = StyleSheet.create({

  hero:{
    backgroundColor:'#283593',
    padding:35,
    borderRadius:20,
    marginBottom:30
  },

  title:{
    fontSize:28,
    fontWeight:'bold',
    color:'white',
    marginBottom:10
  },

  subtitle:{
    color:'#dfe3ff',
    fontSize:15,
    lineHeight:22,
    marginBottom:20
  },

  button:{
    backgroundColor:'white',
    alignSelf:'flex-start',
    paddingVertical:10,
    paddingHorizontal:22,
    borderRadius:8
  },

  buttonText:{
    color:'#283593',
    fontWeight:'bold'
  }

});

export default HeroSection;