import type { AppProps } from 'next/app'
import 'bootstrap/dist/css/bootstrap.css'
import Head from 'next/head'



export default function App({ Component, pageProps }: AppProps) {

  return (
    <>
    {/* needed to add meta tag in order to get media query working */}
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
      <Component {...pageProps} />
    </>
  )
}
