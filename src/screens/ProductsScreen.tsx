import React, { useState } from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { ButtonGroup } from 'react-native-elements';
import ProductList from '../components/ProductList';
import { getProducts } from '../utils/api';
import { NavigationProp, ParamListBase } from '@react-navigation/native';

interface ProductsScreenProps {
    navigation: NavigationProp<ParamListBase>;
}
const categories = ['All', 'Sattu', 'Rice', 'Specialty'];

export default function ProductsScreen({ navigation }: ProductsScreenProps) {
  const [selectedIndex, setSelectedIndex] = useState(0);

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Our Products</Text>
      <ButtonGroup
        onPress={(index) => setSelectedIndex(index)}
        selectedIndex={selectedIndex}
        buttons={categories}
        containerStyle={styles.buttonGroup}
        selectedButtonStyle={styles.selectedButton}
      />
      <ProductList
        category={categories[selectedIndex]}
        navigation={navigation}
        featured={false}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F5DC',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#2E8B57',
    textAlign: 'center',
    marginVertical: 20,
  },
  buttonGroup: {
    marginBottom: 20,
    backgroundColor: 'transparent',
  },
  selectedButton: {
    backgroundColor: '#2E8B57',
  },
});