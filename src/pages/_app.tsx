import { AppProps } from 'next/app';
import Head from 'next/head';
import '../styles/globals.css';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>MAHEU-OS Terminal Interface</title>
        <link rel="icon" href="/favicon.ico" />
        <link rel="icon" type="image/png" href="/favicon.png" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="description" content="MAHEU-OS Terminal Interface - An advanced AI-powered chat interface" />
      </Head>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp; 