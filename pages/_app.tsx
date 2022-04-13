import '../styles/master.scss'
import type { AppProps } from 'next/app'

function AstroApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}

export default AstroApp
