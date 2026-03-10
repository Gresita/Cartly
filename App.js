import React from 'react';
import { Text, TouchableOpacity, View, StyleSheet } from 'react-native';
import { NavigationContainer, useNavigation } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import HomeScreen from './screens/HomeScreen';
import ProductsScreen from './screens/ProductsScreen';
import ProductDetailScreen from './screens/ProductDetailScreen';
import CartScreen from './screens/CartScreen';
import AboutScreen from './screens/AboutScreen';
import CheckoutScreen from './screens/CheckoutScreen';
import ProfileScreen from './screens/ProfileScreen';
import LoginScreen from './screens/LoginScreen';
import RegisterScreen from './screens/RegisterScreen';

const Stack = createNativeStackNavigator();

const HeaderMenu = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.headerContainer}>
      <Text style={styles.logo}>Cartly</Text>
      <View style={styles.menu}>
        <TouchableOpacity onPress={() => navigation.navigate('Home')}>
          <Text style={styles.menuItem}>Home</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('Products')}>
          <Text style={styles.menuItem}>Products</Text>
        </TouchableOpacity>
        {/* KETU ËSHTË RREGULLIMI: navigation.navigate në vend të alert */}
        <TouchableOpacity onPress={() => navigation.navigate('About')}>
          <Text style={styles.menuItem}>About</Text>
        </TouchableOpacity>
   
      </View>
      <TouchableOpacity
        style={styles.cartButton}
        onPress={() => navigation.navigate('Cart')}
      >
        <Text style={styles.cartText}>🛒 Cart</Text>
      </TouchableOpacity>
    </View>
  );
};

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Home"
        screenOptions={{
          header: () => <HeaderMenu />,
          headerStyle: { backgroundColor: '#E7E9F4' },
        }}
      >
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Products" component={ProductsScreen} />
        <Stack.Screen
          name="ProductDetail"
          component={ProductDetailScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen name="Cart" component={CartScreen} />
        <Stack.Screen name="Checkout" component={CheckoutScreen} />
        <Stack.Screen name="Profile" component={ProfileScreen} />
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="Register" component={RegisterScreen} />
        <Stack.Screen name="About" component={AboutScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  headerContainer: {
    flexDirection: 'row',
    backgroundColor: '#E7E9F4',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    paddingVertical: 10,
    width: '100%',
  },
  logo: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#283593',
  },
  menu: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  menuItem: {
    fontSize: 16,
    color: '#3949AB',
    marginHorizontal: 10,
  },
  cartButton: {
    backgroundColor: '#283593',
    borderRadius: 8,
    paddingVertical: 6,
    paddingHorizontal: 12,
  },
  cartText: {
    color: 'white',
    fontWeight: 'bold',
  },
});