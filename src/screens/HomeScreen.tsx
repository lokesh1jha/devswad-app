import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Button } from 'react-native-elements';
import ProductList from '../components/ProductList';
import { NavigationProp, ParamListBase } from '@react-navigation/native';

interface HomeScreenProps {
    navigation: NavigationProp<ParamListBase>;
}
export default function HomeScreen({ navigation }: HomeScreenProps) {
  return (
    <SafeAreaView style={styles.container} edges={['bottom', 'left', 'right']}>
      <ScrollView contentContainerStyle={styles.scrollViewContent}>
        <View style={styles.hero}>
          <Text style={styles.heroTitle}>Authentic Bihari Flavors</Text>
          <Text style={styles.heroSubtitle}>Delivered to You</Text>
          <Button
            title="Shop Now"
            onPress={() => navigation.navigate('Products')}
            buttonStyle={styles.shopButton}
            titleStyle={styles.shopButtonText}
          />
        </View>
        <View style={styles.featuresContainer}>
          <View style={styles.featureItem}>
            <Text style={styles.featureTitle}>Natural Goodness</Text>
            <Text style={styles.featureDescription}>Sourced from Bihar's fertile lands</Text>
          </View>
          <View style={styles.featureItem}>
            <Text style={styles.featureTitle}>Traditional Recipes</Text>
            <Text style={styles.featureDescription}>Time-honored preparation methods</Text>
          </View>
          <View style={styles.featureItem}>
            <Text style={styles.featureTitle}>Customer Satisfaction</Text>
            <Text style={styles.featureDescription}>Quality that brings a smile</Text>
          </View>
        </View>
        <View style={styles.featuredProducts}>
          <Text style={styles.sectionTitle}>Featured Products</Text>
          <ProductList featured={true} navigation={navigation} category={'All'}/>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F5DC',
  },
  scrollViewContent: {
    flexGrow: 1,
  },
  hero: {
    backgroundColor: '#2E8B57',
    padding: 20,
    alignItems: 'center',
  },
  heroTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'white',
    textAlign: 'center',
  },
  heroSubtitle: {
    fontSize: 18,
    color: 'white',
    marginBottom: 20,
    textAlign: 'center',
  },
  shopButton: {
    backgroundColor: '#F5F5DC',
    borderRadius: 20,
    paddingVertical: 10,
    paddingHorizontal: 30,
    // Remove the color property from here
  },
  shopButtonText: { // Add this new style
    color: 'black',
  },
  featuresContainer: {
    padding: 20,
  },
  featureItem: {
    marginBottom: 20,
  },
  featureTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#2E8B57',
  },
  featureDescription: {
    fontSize: 16,
    color: '#4A4A4A',
  },
  featuredProducts: {
    padding: 20,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#2E8B57',
  },
});