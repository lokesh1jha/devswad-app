import React, { useState, useEffect } from 'react'
import { StyleSheet, View, ImageBackground, KeyboardAvoidingView, Platform, ScrollView, Alert, AppState } from 'react-native'
import { supabase } from '../lib/supabase'
import { Input, Button, Text, Image } from 'react-native-elements'
import { Ionicons } from '@expo/vector-icons'

AppState.addEventListener('change', (state) => {
  if (state === 'active') {
    supabase.auth.startAutoRefresh()
  } else {
    supabase.auth.stopAutoRefresh()
  }
})

export default function Auth() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [loading, setLoading] = useState(false)
  const [isSignUp, setIsSignUp] = useState(false)

  async function handleAuth() {
    if (!email || !password) {
      Alert.alert('Error', 'Please fill in all fields')
      return
    }

    setLoading(true)
    try {
      if (isSignUp) {
        const { data, error } = await supabase.auth.signUp({
          email: email,
          password: password,
        })
        if (error) throw error
        if (!data.session) Alert.alert('Success', 'Please check your inbox for email verification!')
      } else {
        const { error } = await supabase.auth.signInWithPassword({
          email: email,
          password: password,
        })
        if (error) throw error
      }
    } catch (error: any) {
      Alert.alert('Error', error.message)
    } finally {
      setLoading(false)
    }
  }

  return (
    <ImageBackground
      source={{ uri: 'https://unsplash.com/photos/a-close-up-of-a-plant-with-a-sky-background-hu8pNcL9T48' }}
      style={styles.backgroundImage}
    >
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        style={styles.container}
      >
        <ScrollView contentContainerStyle={styles.scrollView}>
          <View style={styles.logoContainer}>
            <Image
              source={{ uri: 'https://placeholder.com/wp-content/uploads/2018/10/placeholder.com-logo1.png' }}
              style={styles.logo}
              placeholderStyle={{ backgroundColor: 'transparent' }}
            />
            <Text h2 style={styles.appName}>Devswad</Text>
            <Text style={styles.tagline}>Authentic Bihar Cuisine at Your Doorstep</Text>
          </View>
          <View style={styles.formContainer}>
            <Input
              placeholder="Email"
              leftIcon={<Ionicons name="mail-outline" size={24} color="#6B4423" />}
              onChangeText={setEmail}
              value={email}
              autoCapitalize="none"
              keyboardType="email-address"
              inputStyle={styles.input}
              placeholderTextColor="#6B4423"
            />
            <Input
              placeholder="Password"
              leftIcon={<Ionicons name="lock-closed-outline" size={24} color="#6B4423" />}
              onChangeText={setPassword}
              value={password}
              secureTextEntry
              autoCapitalize="none"
              inputStyle={styles.input}
              placeholderTextColor="#6B4423"
            />
            <Button
              title={isSignUp ? "Create Account" : "Sign In"}
              onPress={handleAuth}
              loading={loading}
              buttonStyle={styles.authButton}
              titleStyle={styles.buttonTitle}
            />
            <Button
              title={isSignUp ? "Already have an account? Sign In" : "Don't have an account? Sign Up"}
              onPress={() => setIsSignUp(!isSignUp)}
              type="clear"
              titleStyle={styles.switchAuthTitle}
            />
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
    </ImageBackground>
  )
}

const styles = StyleSheet.create({
  backgroundImage: {
    flex: 1,
    resizeMode: 'cover',
  },
  container: {
    flex: 1,
  },
  scrollView: {
    flexGrow: 1,
    justifyContent: 'center',
  },
  logoContainer: {
    alignItems: 'center',
    marginBottom: 40,
  },
  logo: {
    width: 120,
    height: 120,
    borderRadius: 60,
    marginBottom: 10,
  },
  appName: {
    color: '#347474',
    fontWeight: 'bold',
    // textShadowColor: 'rgba(0, 0, 0, 0.75)',
    textShadowOffset: { width: -1, height: 1 },
    textShadowRadius: 10,
  },
  tagline: {
    color: '#347474',
    fontSize: 16,
    textAlign: 'center',
    fontStyle: 'italic',
    textShadowColor: 'rgba(0, 0, 0, 0.45)',
    textShadowOffset: { width: -1, height: 1 },
    textShadowRadius: 10,
  },
  formContainer: {
    backgroundColor: 'rgba(255, 255, 255, 0.8)',
    borderRadius: 10,
    padding: 20,
    marginHorizontal: 20,
  },
  input: {
    color: '#6B4423',
  },
  authButton: {
    backgroundColor: '#D35400',
    borderRadius: 25,
    paddingVertical: 12,
    marginTop: 20,
  },
  buttonTitle: {
    fontWeight: 'bold',
  },
  switchAuthTitle: {
    color: '#6B4423',
    fontSize: 14,
  },
})