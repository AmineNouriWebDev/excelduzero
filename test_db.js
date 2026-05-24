const { createClient } = require('@supabase/supabase-js');
const supabase = createClient('https://xjfbwstmfiqpljsvlezw.supabase.co', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InhqZmJ3c3RtZmlxcGxqc3ZsZXp3Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDgxNjM3ODAsImV4cCI6MjA2MzczOTc4MH0.gAjsNIAeINqw_q6U0YSFUKdmcBZJkj3tYGu0b1p481w');

async function test() {
  const { data: prof, error: fetchError } = await supabase.from('profiles').select('*').limit(1);
  console.log("Profile structure:", prof);
}
test();
