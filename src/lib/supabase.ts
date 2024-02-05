import { createClient } from '@supabase/supabase-js'

const supabaseURL = 'https://vcuzphfxscxxbfuoeckc.supabase.co'
const supabaseKEY =
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InZjdXpwaGZ4c2N4eGJmdW9lY2tjIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDYyMDYyNjEsImV4cCI6MjAyMTc4MjI2MX0.aWHIVWXd32N3ijf1QOLLiiFv-nZSu1Z5bgxoZSxb72Q'

const supabase = createClient(supabaseURL, supabaseKEY)

export default supabase
