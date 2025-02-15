import { AppProps } from 'next/app'
import 'bootstrap/dist/css/bootstrap.css'
import '../styles/index.css'

import { useEffect } from "react";

function MyApp({ Component, pageProps }: AppProps) {
  useEffect(() => {
    require("bootstrap/dist/js/bootstrap.bundle.min.js");
  }, []);

  return <Component {...pageProps} />
}

export default MyApp
