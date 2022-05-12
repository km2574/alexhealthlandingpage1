import '../styles/globals.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import '../node_modules/font-awesome/css/font-awesome.min.css';
import { hotjar } from 'react-hotjar'
import { useEffect } from 'react'



function MyApp({ Component, pageProps }) {
  useEffect(() => {
    hotjar.initialize(2967802, 6)
  }, [])
  return <Component {...pageProps} />
}

export default MyApp
