import React from 'react';
import { ScrollView, View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';

const AboutScreen = () => {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      {/* Hero Section */}
      <View style={styles.heroSection}>
        <Text style={styles.heroTitle}>Rreth Nesh</Text>
        <Text style={styles.heroSubtitle}>
          Zbuloni botën e teknologjisë audio me Cartly
        </Text>
        
      </View>

      {/* Mission Section */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Misioni Jonë</Text>
        <Text style={styles.sectionDescription}>
          Në Cartly, ne kemi një mision të thjeshtë: të sjellim produkte audio dhe elektronike
          me cilësi të lartë në shtëpinë tuaj. Ne besojmë se çdo klient meriton akses
          në teknologjinë më të fundit në çmime të arsyeshme.
        </Text>
      </View>

      {/* Values Section */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Vlerat Tona</Text>
        <View style={styles.valuesList}>
          <View style={styles.valueItem}>
            <Text style={styles.valueIcon}>🚀</Text>
            <Text style={styles.valueTitle}>Inovacion</Text>
            <Text style={styles.valueDescription}>
              Jemi gjithmonë në kërkim të produkteve më të reja dhe teknologjisë së fundit.
            </Text>
          </View>
          <View style={styles.valueItem}>
            <Text style={styles.valueIcon}>💎</Text>
            <Text style={styles.valueTitle}>Cilësi</Text>
            <Text style={styles.valueDescription}>
              Çdo produkt kalon një proces të rreptë kontrolli cilësie përpara se të arrijë tek ju.
            </Text>
          </View>
          <View style={styles.valueItem}>
            <Text style={styles.valueIcon}>🤝</Text>
            <Text style={styles.valueTitle}>Besnikëri</Text>
            <Text style={styles.valueDescription}>
              Ndërtojmë marrëdhënie të qëndrueshme me klientët përmes shërbimit të shkëlqyer.
            </Text>
          </View>
        </View>
      </View>

      {/* Contact Section */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Kontakto Na</Text>
        <Text style={styles.sectionDescription}>
          Jeni të mirëpritur të na kontaktoni për çdo pyetje apo bashkëpunim.
        </Text>
        <TouchableOpacity style={styles.contactButton}>
          <Text style={styles.contactButtonText}>Na Kontaktoni</Text>
        </TouchableOpacity>
      </View>

      {/* Footer */}
      <View style={styles.footer}>
        <Text style={styles.footerText}>© 2026 Cartly. Të gjitha të drejtat e rezervuara.</Text>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 30,
    backgroundColor: '#ebeffb',
    alignItems: 'center',
  },
  heroSection: {
    alignItems: 'center',
    marginBottom: 40,
  },
  heroTitle: {
    fontSize: 34,
    fontWeight: 'bold',
    color: '#182154',
    marginBottom: 10,
  },
  heroSubtitle: {
    fontSize: 16,
    color: '#50577a',
    marginBottom: 20,
    textAlign: 'center',
    maxWidth: 600,
  },
  heroImage: {
    width: 250,
    height: 250,
    borderRadius: 20,
  },
  section: {
    width: '100%',
    maxWidth: 700,
    marginBottom: 40,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '700',
    color: '#182154',
    marginBottom: 15,
  },
  sectionDescription: {
    fontSize: 16,
    color: '#50577a',
    lineHeight: 23,
  },
  valuesList: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  valueItem: {
    width: '30%',
    backgroundColor: '#fff',
    borderRadius: 15,
    padding: 20,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 7,
    shadowOffset: { width: 0, height: 3 },
    elevation: 5,
  },
  valueIcon: {
    fontSize: 36,
    marginBottom: 12,
  },
  valueTitle: {
    fontWeight: '700',
    fontSize: 18,
    color: '#182154',
    marginBottom: 8,
  },
  valueDescription: {
    fontSize: 14,
    color: '#50577a',
    textAlign: 'center',
  },
  contactButton: {
    marginTop: 20,
    backgroundColor: '#3950A6',
    paddingVertical: 16,
    borderRadius: 10,
    alignItems: 'center',
  },
  contactButtonText: {
    color: 'white',
    fontWeight: '700',
    fontSize: 16,
  },
  footer: {
    marginTop: 50,
    paddingVertical: 20,
  },
  footerText: {
    fontSize: 12,
    color: '#50577a',
    textAlign: 'center',
  },
});

export default AboutScreen;