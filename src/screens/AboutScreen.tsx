import React from 'react';
import { View, Text, StyleSheet, ScrollView, Image } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Card } from 'react-native-elements';

export default function AboutScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <Text style={styles.title}>About DevSwaD</Text>
        
        <Image
          source={{ uri: 'https://example.com/devswad-logo.jpg' }}
          style={styles.logo}
        />
        
        <Text style={styles.description}>
          DevSwaD was born out of a passion for preserving and sharing the authentic flavors of Bihar. 
          Our journey began in the heart of Bihar, where we witnessed the rich culinary traditions 
          passed down through generations.
        </Text>
        
        <Card containerStyle={styles.card}>
          <Card.Title>Our Mission</Card.Title>
          <Card.Divider />
          <Text style={styles.cardText}>
            At DevSwaD, our mission is to celebrate and promote the rich culinary heritage of Bihar 
            while supporting local farmers and artisans. We strive to deliver premium quality, 
            authentic Bihari products that not only tantalize taste buds but also contribute to 
            the well-being of our customers and communities.
          </Text>
        </Card>
        
        <Text style={styles.sectionTitle}>Our Values</Text>
        {['Authenticity', 'Quality', 'Sustainability'].map((value, index) => (
          <Card key={index} containerStyle={styles.card}>
            <Card.Title>{value}</Card.Title>
            <Card.Divider />
            <Text style={styles.cardText}>
              We are committed to {value.toLowerCase()} in every aspect of our business, 
              from sourcing ingredients to delivering products to your doorstep.
            </Text>
          </Card>
        ))}
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F5DC',
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#2E8B57',
    textAlign: 'center',
    marginBottom: 20,
  },
  logo: {
    width: '100%',
    height: 200,
    resizeMode: 'contain',
    marginBottom: 20,
  },
  description: {
    fontSize: 16,
    marginBottom: 20,
    lineHeight: 24,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#2E8B57',
    marginTop: 20,
    marginBottom: 10,
  },
  card: {
    backgroundColor: 'white',
    borderRadius: 8,
    marginBottom: 15,
  },
  cardText: {
    fontSize: 14,
    lineHeight: 22,
  },
});