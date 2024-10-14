import React from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Card } from 'react-native-elements';
import { createDrawerNavigator } from '@react-navigation/drawer';

// User Details Screen
function UserDetailsScreen() {
  const user = {
    name: 'John Doe',
    email: 'john.doe@example.com',
    phone: '+1 234 567 8900',
  };

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>Me</Text>
      {/* @ts-ignore */}
      <Card containerStyle={styles.card}>
        <Card.Title>User Details</Card.Title>
        <Card.Divider />
        <Text style={styles.cardText}>Name: {user.name}</Text>
        <Text style={styles.cardText}>Email: {user.email}</Text>
        <Text style={styles.cardText}>Phone: {user.phone}</Text>
      </Card>
    </ScrollView>
  );
}

// Address Screen
function AddressScreen() {
  const addresses = [
    { id: 1, address: '123 Main St, Anytown, State 12345' },
    { id: 2, address: '456 Elm St, Another Town, State 67890' },
  ];

  const handleEditAddress = (id: number) => {
    // Implement edit address logic
    console.log('Edit address', id);
  };

  const handleDeleteAddress = (id: number) => {
    // Implement delete address logic with confirmation
    console.log('Delete address', id);
  };

  const handleAddAddress = () => {
    // Implement add new address logic
    console.log('Add new address');
  };

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>Addresses</Text>
      {addresses.map((addr) => (
        // @ts-ignore
        <Card key={addr.id} containerStyle={styles.card}>
          <Text style={styles.cardText}>{addr.address}</Text>
          <View style={styles.addressActions}>
            <TouchableOpacity onPress={() => handleEditAddress(addr.id)}>
              <Text style={styles.actionText}>Edit</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => handleDeleteAddress(addr.id)}>
              <Text style={styles.actionText}>Delete</Text>
            </TouchableOpacity>
          </View>
        </Card>
      ))}
      <TouchableOpacity style={styles.addButton} onPress={handleAddAddress}>
        <Text style={styles.addButtonText}>Add New Address</Text>
      </TouchableOpacity>
    </ScrollView>
  );
}

// Sign Out Screen
function SignOutScreen({ navigation }: { navigation: any }) {
  const handleSignOut = () => {
    // Implement your sign-out logic here
    console.log('Sign out pressed');
    // After signing out, you might want to navigate to the login screen
    // navigation.navigate('Login');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Sign Out</Text>
      <TouchableOpacity style={styles.signOutButton} onPress={handleSignOut}>
        <Text style={styles.signOutButtonText}>Sign Out</Text>
      </TouchableOpacity>
    </View>
  );
}

const Drawer = createDrawerNavigator();

export default function AboutScreen() {
  return (
    <Drawer.Navigator initialRouteName="UserDetails">
      <Drawer.Screen name="Me" component={UserDetailsScreen} />
      <Drawer.Screen name="Addresses" component={AddressScreen} />
      <Drawer.Screen name="Sign Out" component={SignOutScreen} />
    </Drawer.Navigator>
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
  card: {
    backgroundColor: 'white',
    borderRadius: 8,
    marginBottom: 15,
  },
  cardText: {
    fontSize: 16,
    lineHeight: 24,
    marginBottom: 5,
  },
  addressActions: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: 10,
  },
  actionText: {
    color: '#2E8B57',
    fontWeight: 'bold',
  },
  addButton: {
    backgroundColor: '#2E8B57',
    padding: 15,
    borderRadius: 8,
    alignItems: 'center',
    marginTop: 20,
  },
  addButtonText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
  signOutButton: {
    backgroundColor: '#2E8B57',
    padding: 15,
    borderRadius: 8,
    alignItems: 'center',
    marginTop: 20,
  },
  signOutButtonText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
});
