import type { AppProps } from 'next/app'
import Script from 'next/script'
import 'bootstrap/dist/css/bootstrap.css'

import { useEffect, useState } from 'react'

export default function App({ Component, pageProps }: AppProps) {

  const [geoLocation, setGeoLocation] = useState({})

  useEffect(() => {
    
    navigator.geolocation.getCurrentPosition(function(position) {
      setGeoLocation(position)
    });
    console.log(geoLocation)
  }, [])

  return (
    <>
      <Component {...pageProps} />
    </>
  )
}
