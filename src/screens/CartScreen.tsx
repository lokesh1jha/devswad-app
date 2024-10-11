import React from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Button } from 'react-native-elements';
import { useCart } from '../hooks/useCart';
import { NavigationProp, ParamListBase } from '@react-navigation/native';

interface CheckoutScreenProps {
    navigation: NavigationProp<ParamListBase>;
}
export default function CartScreen({ navigation }: CheckoutScreenProps) {
  const { cart, updateQuantity, removeFromCart, total } = useCart();

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Your Cart</Text>
      {cart.length === 0 ? (
        <Text style={styles.emptyCart}>Your cart is empty</Text>
      ) : (
        <>
          <FlatList
            data={cart}
            renderItem={({ item }) => (
              <View>
                <Text>{item.name}</Text>
                <Text>{item.price}</Text>
                <Text>{item.quantity}</Text>
              </View>
              // <CartItem
              //   item={item}
              //   updateQuantity={updateQuantity}
              //   removeFromCart={removeFromCart}
              // />
            )}
            keyExtractor={(item) => item.id}
          />
          <View style={styles.totalContainer}>
            <Text style={styles.totalText}>Total: {total}</Text>
            <Button
              title="Proceed to Checkout"
              onPress={() => navigation.navigate('Checkout')}
              buttonStyle={styles.checkoutButton}
            />
          </View>
        </>
      )}
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
  emptyCart: {
    fontSize: 18,
    textAlign: 'center',
    marginTop: 50,
  },
  totalContainer: {
    marginTop: 20,
    borderTopWidth: 1,
    borderTopColor: '#2E8B57',
    paddingTop: 20,
  },
  totalText: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  checkoutButton: {
    backgroundColor: '#2E8B57',
  },
});