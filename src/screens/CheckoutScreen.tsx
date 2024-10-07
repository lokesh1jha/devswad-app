import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Button, Input } from 'react-native-elements';
import { useCart } from '../hooks/useCart';
import { NavigationProp, ParamListBase } from '@react-navigation/native';

interface CheckoutScreenProps {
    navigation: NavigationProp<ParamListBase>;
}
export default function CheckoutScreen({ navigation }: CheckoutScreenProps) {
  const { cart, total } = useCart();
  const [address, setAddress] = useState('');
  const [paymentMethod, setPaymentMethod] = useState('');

  const handlePlaceOrder = () => {
    // Here you would typically send the order to your backend
    // and handle the payment process (e.g., integrating with Stripe)
    console.log('Order placed:', { cart, total, address, paymentMethod });
    navigation.navigate('OrderConfirmation');
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <Text style={styles.title}>Checkout</Text>
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Shipping Address</Text>
          <Input
            placeholder="Enter your full address"
            value={address}
            onChangeText={setAddress}
            multiline
          />
        </View>
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Payment Method</Text>
          <Input
            placeholder="Enter payment method"
            value={paymentMethod}
            onChangeText={setPaymentMethod}
          />
        </View>
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Order Summary</Text>
          {cart.map((item) => (
            <View key={item.id} style={styles.orderItem}>
              <Text>{item.name}</Text>
              <Text>
                {item.quantity} x {item.price}
              </Text>
            </View>
          ))}
          <Text style={styles.total}>Total: {total}</Text>
        </View>
        <Button
          title="Place Order"
          onPress={handlePlaceOrder}
          buttonStyle={styles.placeOrderButton}
        />
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
  section: {
    marginBottom: 20,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  orderItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 5,
  },
  total: {
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 10,
  },
  placeOrderButton: {
    backgroundColor: '#2E8B57',
    marginTop: 20,
  },
});