import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const Header = () => {
  const navigation = useNavigation();

  const menuItems = [
    { label: 'Home', route: 'Home' },
    { label: 'Products', route: 'Products' },
    { label: 'About', route: 'About' },          // ky është butoni About për navigim
   
  ];

  return (
    <View style={styles.container}>
      <Text style={styles.logo}>Cartly</Text>
      <View style={styles.menu}>
        {menuItems.map((item) => (
          <TouchableOpacity
            key={item.label}
            onPress={() => navigation.navigate(item.route)}  // navigim te route i saktë
            style={styles.menuItemWrapper}
          >
            <Text style={styles.menuItem}>{item.label}</Text>
          </TouchableOpacity>
        ))}
      </View>
      <TouchableOpacity style={styles.cartButton} onPress={() => navigation.navigate('Cart')}>
        <Text style={styles.cartText}>🛒 Cart</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flexDirection: 'row', backgroundColor: '#E7E9F4', paddingHorizontal: 20, paddingVertical: 10, justifyContent: 'space-between', alignItems: 'center' },
  logo: { fontWeight: 'bold', fontSize: 22, color: '#283593' },
  menu: { flexDirection: 'row' },
  menuItemWrapper: { marginHorizontal: 10 },
  menuItem: { fontSize: 16, color: '#3949AB' },
  cartButton: { backgroundColor: '#283593', borderRadius: 6, padding: 8 },
  cartText: { color: 'white', fontWeight: 'bold', fontSize: 18 },
});

export default Header;