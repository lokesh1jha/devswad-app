import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Input, Button, Card } from 'react-native-elements';
import { Ionicons } from '@expo/vector-icons';

export default function ContactScreen() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = () => {
    // Here you would typically send the form data to your backend
    console.log('Form submitted:', { name, email, message });
    // Reset form fields
    setName('');
    setEmail('');
    setMessage('');
    // Show a success message to the user
    alert('Thank you for your message. We will get back to you soon!');
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <Text style={styles.title}>Contact Us</Text>
        
        <Card containerStyle={styles.card}>
          <Input
            placeholder="Your Name"
            leftIcon={<Ionicons name="person-outline" size={24} color="#2E8B57" />}
            value={name}
            onChangeText={setName}
          />
          <Input
            placeholder="Your Email"
            leftIcon={<Ionicons name="mail-outline" size={24} color="#2E8B57" />}
            value={email}
            onChangeText={setEmail}
            keyboardType="email-address"
          />
          <Input
            placeholder="Your Message"
            leftIcon={<Ionicons name="chatbox-outline" size={24} color="#2E8B57" />}
            value={message}
            onChangeText={setMessage}
            multiline
            numberOfLines={4}
          />
          <Button
            title="Send Message"
            onPress={handleSubmit}
            buttonStyle={styles.submitButton}
          />
        </Card>
        
        <Card containerStyle={styles.card}>
          <Card.Title>Contact Information</Card.Title>
          <Card.Divider />
          <View style={styles.contactItem}>
            <Ionicons name="location-outline" size={24} color="#2E8B57" />
            <Text style={styles.contactText}>123 Bihar Street, Patna, Bihar 800001</Text>
          </View>
          <View style={styles.contactItem}>
            <Ionicons name="call-outline" size={24} color="#2E8B57" />
            <Text style={styles.contactText}>+91 123 456 7890</Text>
          </View>
          <View style={styles.contactItem}>
            <Ionicons name="mail-outline" size={24} color="#2E8B57" />
            <Text style={styles.contactText}>info@devswad.com</Text>
          </View>
        </Card>
        
        <Card containerStyle={styles.card}>
          <Card.Title>Business Hours</Card.Title>
          <Card.Divider />
          <Text style={styles.businessHours}>Monday - Friday: 9:00 AM - 6:00 PM</Text>
          <Text style={styles.businessHours}>Saturday: 10:00 AM - 4:00 PM</Text>
          <Text style={styles.businessHours}>Sunday: Closed</Text>
        </Card>
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
  card: {
    backgroundColor: 'white',
    borderRadius: 8,
    marginBottom: 15,
  },
  submitButton: {
    backgroundColor: '#2E8B57',
    borderRadius: 8,
    marginTop: 10,
  },
  contactItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  contactText: {
    marginLeft: 10,
    fontSize: 16,
  },
  businessHours: {
    fontSize: 16,
    marginBottom: 5,
  },
});