import type { AppProps } from 'next/app';
import '@/styles/homepage.css';
import '@/styles/utilities.css';
import '@/styles/sign-in.css';
import '@/styles/sign-up.css';

export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}
