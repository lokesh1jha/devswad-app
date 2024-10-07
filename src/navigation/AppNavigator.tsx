import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import { Ionicons } from '@expo/vector-icons';


import HomeScreen from '../screens/HomeScreen';
import ProductDetailScreen from '../screens/ProductDetailScreen';
import OrdersScreen from '../screens/OrdersScreen';
import OrderDetailScreen from '../screens/OrderDetailScreen';
import CartScreen from '../screens/CartScreen';
import CheckoutScreen from '../screens/CheckoutScreen';
import ProductsScreen from '../screens/ProductsScreen';
import AboutScreen from '../screens/AboutScreen';

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

function ProductsStack() {
    return (
        <Stack.Navigator>
            <Stack.Screen name="ProductsList" component={ProductsScreen} options={{ title: 'Products' }} />
            <Stack.Screen name="ProductDetail" component={ProductDetailScreen} options={{ title: 'Product Details' }} />
        </Stack.Navigator>
    );
}

function CartStack() {
    return (
        <Stack.Navigator>
            <Stack.Screen name="CartList" component={CartScreen} options={{ title: 'Cart' }} />
            <Stack.Screen name="Checkout" component={CheckoutScreen} options={{ title: 'Checkout' }} />
        </Stack.Navigator>
    );
}

function OrdersStack() {
    return (
        <Stack.Navigator>
            <Stack.Screen name="OrdersList" component={OrdersScreen} options={{ title: 'Orders' }} />
            <Stack.Screen name="OrderDetail" component={OrderDetailScreen} options={{ title: 'Order Details' }} />
        </Stack.Navigator>
    );
}

export default function AppNavigator() {
    return (
        <Tab.Navigator
            screenOptions={({ route }) => ({
                tabBarIcon: ({ focused, color, size }) => {
                    let iconName;

                    if (route.name === 'Home') {
                        iconName = focused ? 'home' : 'home-outline';
                    } else if (route.name === 'Products') {
                        iconName = focused ? 'list' : 'list-outline';
                    } else if (route.name === 'Cart') {
                        iconName = focused ? 'cart' : 'cart-outline';
                    } else if (route.name === 'Orders') {
                        iconName = focused ? 'receipt' : 'receipt-outline';
                    } else if (route.name === 'More') {
                        iconName = focused ? 'menu' : 'menu-outline';
                    }

                    return <Ionicons name={iconName as any} size={size} color={color} />;
                }, tabBarActiveTintColor: '#2E8B57',
                tabBarInactiveTintColor: 'gray',
            })}
        >
            <Tab.Screen name="Home" component={HomeScreen} />
            <Tab.Screen name="Products" component={ProductsStack} />
            <Tab.Screen name="Cart" component={CartStack} />
            <Tab.Screen name="Orders" component={OrdersStack} />
            <Tab.Screen name="More" component={AboutScreen} />
        </Tab.Navigator>
    );
}