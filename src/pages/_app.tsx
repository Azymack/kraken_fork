import '../styles/global.css';
import '../styles/font.css';

// import '../styles/crypton.min.css';
// import '../styles/kraken.min.css';
// import '../styles/stylr.min.css';
// import '../styles/temp.css';
import type { AppProps } from 'next/app';

const MyApp = ({ Component, pageProps }: AppProps) => (
  <Component {...pageProps} />
);

export default MyApp;
