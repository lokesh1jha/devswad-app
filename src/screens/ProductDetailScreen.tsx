import React from 'react';
import { View, Text, Image, StyleSheet, ScrollView } from 'react-native';
import { Button } from 'react-native-elements';
import { getProductById } from '../utils/api';
import { useCart } from '../hooks/useCart';

interface ProductDetailScreenProps {
    route: { params: { productId: string } };
}
export default function ProductDetailScreen({ route }: ProductDetailScreenProps) {
  const { productId } = route.params;
  const product = getProductById(productId);
  const { addToCart } = useCart();

  if (!product) {
    return <Text>Product not found</Text>;
  }

  return (
    <ScrollView style={styles.container}>
      <Image source={{ uri: product.image }} style={styles.image} />
      <View style={styles.info}>
        <Text style={styles.name}>{product.name}</Text>
        <Text style={styles.price}>{product.price}</Text>
        <Text style={styles.description}>{product.description}</Text>
        <Button
          title="Add to Cart"
          onPress={() => addToCart(product)}
          buttonStyle={styles.addButton}
        />
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F5DC',
  },
  image: {
    width: '100%',
    height: 300,
  },
  info: {
    padding: 20,
  },
  name: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  price: {
    fontSize: 18,
    color: '#2E8B57',
    marginBottom: 10,
  },
  description: {
    fontSize: 16,
    marginBottom: 20,
  },
  addButton: {
    backgroundColor: '#2E8B57',
  },
});