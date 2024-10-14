import AsyncStorage from '@react-native-async-storage/async-storage'
import { createClient } from '@supabase/supabase-js'

const supabaseUrl =  process.env.SUPABASE_URL ||'https://ufxxijtgalqklgfslnbx.supabase.co'
const supabaseAnonKey = process.env.SUPABASE_API_KEY_ANON || 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InVmeHhpanRnYWxxa2xnZnNsbmJ4Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3Mjg2NzA0NjcsImV4cCI6MjA0NDI0NjQ2N30.uKDvEkwj7u-N5wOgUkzAVVmvRDPOJTigZo1sxN27Ops'

export const supabase = createClient(supabaseUrl, supabaseAnonKey, {
  auth: {
    storage: AsyncStorage,
    autoRefreshToken: true,
    persistSession: true,
    detectSessionInUrl: false,
  },
})