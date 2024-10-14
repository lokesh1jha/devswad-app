import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import AppNavigator from './src/navigation/AppNavigator';
import { LogBox } from 'react-native';
import { useState, useEffect } from 'react'
import { Session } from '@supabase/supabase-js'
import { supabase } from './src/lib/supabase';
import Auth from './src/components/Auth';


// Add this near the top of your main app file
LogBox.ignoreLogs([
  'Warning: TextElement: Support for defaultProps will be removed from function components in a future major release. Use JavaScript default parameters instead.',
]);

export default function App() {

  const [session, setSession] = useState<Session | null>(null)

  useEffect(() => {
    supabase.auth.getSession().then(({ data: { session } }) => {
      setSession(session)
    })

    supabase.auth.onAuthStateChange((_event, session) => {
      setSession(session)
    })
  }, [])
  return (
    <SafeAreaProvider>
      {session && session.user ?
        //  <Account key={session.user.id} session={session} /> 
        <NavigationContainer>
          <AppNavigator />
        </NavigationContainer>

        : <Auth />}
    </SafeAreaProvider>
  );
}