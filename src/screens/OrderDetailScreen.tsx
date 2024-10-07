import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { getOrderById } from '../utils/api';

interface OrderDetailScreenProps {
    route: {
        params: {
            orderId: string;
        };
    };
}
export default function OrderDetailScreen({ route }: OrderDetailScreenProps) {
  const { orderId } = route.params;
  const order = getOrderById(orderId);

  if (!order) {
    return (
      <SafeAreaView style={styles.container}>
        <Text style={styles.errorText}>Order not found</Text>
      </SafeAreaView>
    );
  }

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <Text style={styles.title}>Order Details</Text>
        <View style={styles.orderInfo}>
          <Text style={styles.orderInfoText}>Order ID: {order.id}</Text>
          <Text style={styles.orderInfoText}>Date: {order.date}</Text>
          <Text style={styles.orderInfoText}>Status: {order.status}</Text>
          <Text style={styles.orderInfoText}>Total: {order.total}</Text>
        </View>
        <Text style={styles.sectionTitle}>Items</Text>
        {order.items.map((item) => (
          <View key={item.id} style={styles.itemContainer}>
            <Text style={styles.itemName}>{item.name}</Text>
            <Text style={styles.itemQuantity}>Quantity: {item.quantity}</Text>
            <Text style={styles.itemPrice}>Price: {item.price}</Text>
          </View>
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
  errorText: {
    fontSize: 18,
    textAlign: 'center',
    marginTop: 50,
  },
  orderInfo: {
    backgroundColor: 'white',
    padding: 15,
    borderRadius: 8,
    marginBottom: 20,
  },
  orderInfoText: {
    fontSize: 16,
    marginBottom: 5,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  itemContainer: {
    backgroundColor: 'white',
    padding: 15,
    borderRadius: 8,
    marginBottom: 10,
  },
  itemName: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  itemQuantity: {
    fontSize: 14,
    marginTop: 5,
  },
  itemPrice: {
    fontSize: 14,
    color: '#2E8B57',
    marginTop: 5,
  },
});