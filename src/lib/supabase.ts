import { createClient } from "@supabase/supabase-js";

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL || "https://eafqswbsbfnnbtxmzlca.supabase.co";
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY || "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImVhZnFzd2JzYmZubmJ0eG16bGNhIiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODI0NDY0NzIsImV4cCI6MjA5ODAyMjQ3Mn0.gbOdjZ0GHfWM6oeszMh_IetdhS3yhxgdOa5rKTXpmME";

export const supabase = createClient(supabaseUrl, supabaseAnonKey);
