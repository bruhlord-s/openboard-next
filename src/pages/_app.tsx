import "../styles/globals.css";
import "../styles/reset.css";
import "../styles/variables.css";
import "../styles/popup.css";

import type { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}
