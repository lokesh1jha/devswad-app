import React from 'react';
import { View, Text, StyleSheet, FlatList, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { getOrders } from '../utils/api';
import { NavigationProp, ParamListBase } from '@react-navigation/native';

interface Order {
    id: string;
    date: string;
    total: number;
    status: string;
}

interface OrderScreenProps {
    navigation: NavigationProp<ParamListBase>;
}

export default function OrdersScreen({ navigation }: OrderScreenProps) {
  const orders = getOrders();

  const renderOrderItem = ({ item }: { item: Order }) => (
    <TouchableOpacity
      style={styles.orderItem}
      onPress={() => navigation.navigate('OrderDetail', { orderId: item.id })}
    >
      <Text style={styles.orderDate}>Order Date: {item.date}</Text>
      <Text style={styles.orderTotal}>Total: {item.total}</Text>
      <Text style={styles.orderStatus}>Status: {item.status}</Text>
    </TouchableOpacity>
  );

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Your Orders</Text>
      {orders.length === 0 ? (
        <Text style={styles.emptyOrders}>You have no orders yet</Text>
      ) : (
        <FlatList
          data={orders.map(order => ({...order, total: Number(order.total)}))}
          renderItem={renderOrderItem}
          keyExtractor={(item) => item.id}
        />
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
  emptyOrders: {
    fontSize: 18,
    textAlign: 'center',
    marginTop: 50,
  },
  orderItem: {
    backgroundColor: 'white',
    padding: 15,
    borderRadius: 8,
    marginBottom: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
    elevation: 3,
  },
  orderDate: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  orderTotal: {
    fontSize: 14,
    color: '#2E8B57',
    marginTop: 5,
  },
  orderStatus: {
    fontSize: 14,
    marginTop: 5,
  },
});