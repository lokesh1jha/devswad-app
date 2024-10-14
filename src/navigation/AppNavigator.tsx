import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import { Ionicons } from '@expo/vector-icons';
import { SafeAreaView } from 'react-native-safe-area-context';
import { View, StyleSheet, TextInput, TouchableOpacity, Platform, StatusBar } from 'react-native';

import HomeScreen from '../screens/HomeScreen';
import ProductDetailScreen from '../screens/ProductDetailScreen';
import OrdersScreen from '../screens/OrdersScreen';
import OrderDetailScreen from '../screens/OrderDetailScreen';
import CartScreen from '../screens/CartScreen';
import CheckoutScreen from '../screens/CheckoutScreen';
import ProductsScreen from '../screens/ProductsScreen';
import AboutScreen from '../screens/ProfileScreen';

import SearchBar from '../components/SearchBar'; // Import the SearchBar component

// Define the param list for the stack navigator
type ProductsStackParamList = {
  Cart: undefined;
  Checkout: undefined;
  ProductsScreen: undefined;
  ProductDetail: { productId: string };
};

type OrdersStackParamList = {
  OrdersList: undefined;
  OrderDetail: { orderId: string };
};

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator<ProductsStackParamList>();
const OrderStack = createStackNavigator<OrdersStackParamList>();

function ProductsStack() {
    return (
        <Stack.Navigator>
            <Stack.Screen 
                name="ProductsScreen" 
                component={ProductsScreen} 
                options={{ headerShown: false }}
            />
            <Stack.Screen 
                name="ProductDetail" 
                component={ProductDetailScreen} 
                options={{ title: 'Product Details' }}
            />
        </Stack.Navigator>
    );
}

function CartStack() {
    return (
        <Stack.Navigator>
            <Stack.Screen name="Cart" component={CartScreen} options={{ headerShown: false }} />
            <Stack.Screen name="Checkout" component={CheckoutScreen} options={{ headerShown: false }} />
        </Stack.Navigator>
    );
}

function OrdersStack() {
    return (
        <OrderStack.Navigator>
            <OrderStack.Screen name="OrdersList" component={OrdersScreen} options={{ headerShown: false }} />
            <OrderStack.Screen 
                name="OrderDetail" 
                component={OrderDetailScreen} 
                options={{ headerShown: false }}
            />
        </OrderStack.Navigator>
    );
}

function HeaderComponent() {
    return (
        <View style={styles.header}>
            <SearchBar onSearch={(query) => {console.log(query);}} />
            <TouchableOpacity style={styles.profileIcon}>
                <Ionicons name="person-circle-outline" size={30} color="#2E8B57" />
            </TouchableOpacity>
        </View>
    );
}
function TabNavigator() {
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
                    } else if (route.name === 'Profile') {
                        iconName = focused ? 'person' : 'person-outline';
                    }

                    return <Ionicons name={iconName as any} size={size} color={color} />;
                },
                tabBarActiveTintColor: '#2E8B57',
                tabBarInactiveTintColor: 'gray',
                header: () => <HeaderComponent />, // Add this line
            })}
        >
            <Tab.Screen 
                name="Home" 
                component={HomeScreen} 
                options={{ headerShown: false }}
            />
            <Tab.Screen 
                name="Products" 
                component={ProductsStack}
                options={{ headerShown: false }}
            />
            <Tab.Screen 
                name="Cart" 
                component={CartStack} 
                options={{ headerShown: false }}
            />
            <Tab.Screen 
                name="Orders" 
                component={OrdersStack} 
                options={{ headerShown: false }}
            />
            <Tab.Screen 
                name="Profile" 
                component={AboutScreen} 
                options={{ headerShown: false }}
            />
        </Tab.Navigator>
    );
}

export default function AppNavigator() {
    return (
        <SafeAreaView style={styles.safeArea}>
            <TabNavigator />
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    safeArea: {
        flex: 1,
        paddingTop: Platform.OS === 'android' ? (StatusBar.currentHeight || 0) / 3 : 0,
    },
    header: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingHorizontal: 10,
        paddingVertical: 2, // Reduced from 5 to 2
        backgroundColor: '#F5F5DC',
    },
    profileIcon: {
        padding: 5,
    },
    // ... (keep your existing styles)
});
