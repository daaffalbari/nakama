import type { AppProps } from 'next/app';
import '@/styles/homepage.css';
import '@/styles/utilities.css';
import '@/styles/sign-in.css';
import '@/styles/sign-up.css';
import '@/styles/404-not-found.css';
import '@/styles/navbar1.css';
import Head from 'next/head';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <script
          src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.1/dist/js/bootstrap.bundle.min.js"
          integrity="sha384-gtEjrD/SeCtmISkJkNUaaKMoLD0//ElJ19smozuHV6z3Iehds+3Ulb9Bn9Plx0x4"
          crossOrigin="anonymous"
          async
        />
      </Head>
      <Component {...pageProps} />;
    </>
  );
}
