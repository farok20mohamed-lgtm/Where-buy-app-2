
import { createClient } from '@supabase/supabase-js';
import AsyncStorage from '@react-native-async-storage/async-storage';

const SUPABASE_URL = 'https://lxxgalwnwdkdicadaxvn.supabase.co';

const SUPABASE_PUBLISHABLE_KEY =
  'sb_publishable_60ymT29Ssi3hNCFGenjdXw_WhRmZQXd';

export const supabase = createClient(
  SUPABASE_URL,
  SUPABASE_PUBLISHABLE_KEY,
  {
    auth: {
      storage: AsyncStorage,
      autoRefreshToken: true,
      persistSession: true,
      detectSessionInUrl: false,
    },
  }
);