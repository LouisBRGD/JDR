import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://demlatphzsrcgzfixdel.supabase.co';
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImRlbWxhdHBoenNyY2d6Zml4ZGVsIiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODI1NTE0NzMsImV4cCI6MjA5ODEyNzQ3M30._vrVIDD--g-KtR1poeB6nC7gJ-Hz7y3kKulV5S8USq4';

export const supabase = createClient(supabaseUrl, supabaseAnonKey);