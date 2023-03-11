import '@/styles/globals.css'
import Head from 'next/head'

export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Serking | Software Developer</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="description" content="A software developer focusing on web and mobile applications." />
        <meta name="keywords" content="Serking, serkingdeorayom, serking, Serking de Orayom, kingdeorayom, personal page of serking de orayom" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Component {...pageProps} />
    </>
  )

}
