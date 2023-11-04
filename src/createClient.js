import {createClient} from "@supabase/supabase-js";

export const supabase = createClient(
    "https://ogtysqvhsmoayxwkkbvx.supabase.co", 
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im9ndHlzcXZoc21vYXl4d2trYnZ4Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTg4OTgwNTEsImV4cCI6MjAxNDQ3NDA1MX0.UAzSOEethdVv5MFzcsLMqA-6lDxTYqwUWi_vbUKg2WM"
)