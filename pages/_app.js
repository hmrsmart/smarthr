import '../styles/globals.css';
import 'primereact/resources/themes/saga-blue/theme.css';
import 'primereact/resources/primereact.min.css';
import 'primeicons/primeicons.css';
import 'primeflex/primeflex.css';
import { Auth } from '@supabase/ui'
import { supabase } from '../lib/initSupabase'
import '../styles/index.css'

function MyApp({ Component, pageProps }) {
  return( 
    <Auth.UserContextProvider supabaseClient={supabase}>
    <Component {...pageProps} />
    </Auth.UserContextProvider>  
  )
}

export default MyApp
