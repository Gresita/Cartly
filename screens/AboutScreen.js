
import React from 'react';
import { ScrollView, View, Text, StyleSheet, TouchableOpacity } from 'react-native';

const AboutScreen = () => {
  return (
    <ScrollView contentContainerStyle={styles.container}>

      {/* HERO SECTION */}
      <View style={styles.hero}>
        <Text style={styles.heroTitle}>Welcome to Cartly</Text>
        <Text style={styles.heroSubtitle}>
          Your destination for modern tech, audio gear and smart gadgets.
        </Text>

        <View style={styles.heroBadge}>
          <Text style={styles.heroBadgeText}>Innovation Meets Simplicity</Text>
        </View>
      </View>


      {/* STATS SECTION */}
      <View style={styles.statsContainer}>

        <View style={styles.statCard}>
          <Text style={styles.statNumber}>10K+</Text>
          <Text style={styles.statLabel}>Customers</Text>
        </View>

        <View style={styles.statCard}>
          <Text style={styles.statNumber}>500+</Text>
          <Text style={styles.statLabel}>Products</Text>
        </View>

        <View style={styles.statCard}>
          <Text style={styles.statNumber}>4.9★</Text>
          <Text style={styles.statLabel}>Rating</Text>
        </View>

      </View>


      {/* MISSION */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Our Mission</Text>

        <Text style={styles.sectionText}>
          At Cartly we believe technology should improve everyday life.
          Our mission is to make premium electronics accessible,
          stylish and easy to shop online.
        </Text>
      </View>


      {/* VALUES */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>What Drives Us</Text>

        <View style={styles.valuesContainer}>

          <View style={[styles.valueCard, {backgroundColor:"#EEF1FF"}]}>
            <Text style={styles.icon}>🚀</Text>
            <Text style={styles.valueTitle}>Innovation</Text>
            <Text style={styles.valueText}>
              We constantly explore the newest technologies.
            </Text>
          </View>

          <View style={[styles.valueCard, {backgroundColor:"#E7F6FF"}]}>
            <Text style={styles.icon}>💎</Text>
            <Text style={styles.valueTitle}>Quality</Text>
            <Text style={styles.valueText}>
              Every product is carefully selected.
            </Text>
          </View>

          <View style={[styles.valueCard, {backgroundColor:"#FFF4E8"}]}>
            <Text style={styles.icon}>🤝</Text>
            <Text style={styles.valueTitle}>Trust</Text>
            <Text style={styles.valueText}>
              Customers are always our priority.
            </Text>
          </View>

        </View>
      </View>


      {/* CTA SECTION */}
      <View style={styles.ctaSection}>
        <Text style={styles.ctaTitle}>Experience Cartly Today</Text>

        <Text style={styles.ctaText}>
          Discover the future of shopping and explore our premium products.
        </Text>

        <TouchableOpacity style={styles.ctaButton}>
          <Text style={styles.ctaButtonText}>Browse Products</Text>
        </TouchableOpacity>
      </View>


      {/* FOOTER */}
      <View style={styles.footer}>
        <Text style={styles.footerText}>
          © 2026 Cartly • Built with passion for technology
        </Text>
      </View>

    </ScrollView>
  );
};

const styles = StyleSheet.create({

container:{
  padding:25,
  backgroundColor:"#F6F8FF"
},

hero:{
  backgroundColor:"#283593",
  padding:35,
  borderRadius:20,
  alignItems:"center",
  marginBottom:30
},

heroTitle:{
  fontSize:34,
  fontWeight:"bold",
  color:"white",
  marginBottom:10
},

heroSubtitle:{
  fontSize:16,
  color:"#E0E4FF",
  textAlign:"center",
  marginBottom:20
},

heroBadge:{
  backgroundColor:"white",
  paddingHorizontal:15,
  paddingVertical:6,
  borderRadius:20
},

heroBadgeText:{
  color:"#283593",
  fontWeight:"600"
},

statsContainer:{
  flexDirection:"row",
  justifyContent:"space-between",
  marginBottom:35
},

statCard:{
  backgroundColor:"white",
  width:"31%",
  borderRadius:16,
  padding:18,
  alignItems:"center",
  shadowColor:"#000",
  shadowOpacity:0.1,
  shadowRadius:6,
  shadowOffset:{width:0,height:3},
  elevation:4
},

statNumber:{
  fontSize:22,
  fontWeight:"bold",
  color:"#283593"
},

statLabel:{
  fontSize:14,
  color:"#666"
},

section:{
  marginBottom:35
},

sectionTitle:{
  fontSize:24,
  fontWeight:"bold",
  color:"#182154",
  marginBottom:12
},

sectionText:{
  fontSize:16,
  color:"#5f6687",
  lineHeight:24
},

valuesContainer:{
  flexDirection:"row",
  justifyContent:"space-between"
},

valueCard:{
  width:"31%",
  padding:18,
  borderRadius:16,
  alignItems:"center"
},

icon:{
  fontSize:32,
  marginBottom:10
},

valueTitle:{
  fontSize:16,
  fontWeight:"bold",
  color:"#182154",
  marginBottom:6
},

valueText:{
  fontSize:13,
  textAlign:"center",
  color:"#6a6f8c"
},

ctaSection:{
  backgroundColor:"#182154",
  padding:30,
  borderRadius:20,
  alignItems:"center",
  marginTop:10
},

ctaTitle:{
  fontSize:26,
  fontWeight:"bold",
  color:"white",
  marginBottom:10
},

ctaText:{
  color:"#cdd2ff",
  textAlign:"center",
  marginBottom:20
},

ctaButton:{
  backgroundColor:"#3950A6",
  paddingVertical:14,
  paddingHorizontal:30,
  borderRadius:12
},

ctaButtonText:{
  color:"white",
  fontWeight:"bold",
  fontSize:16
},

footer:{
  marginTop:40,
  alignItems:"center"
},

footerText:{
  color:"#7a7f99",
  fontSize:13
}

});

export default AboutScreen;
