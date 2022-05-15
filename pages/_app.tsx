import '../styles/master.scss'
import type { AppProps } from 'next/app'
import NextHead from './section/NextHead'
import SpaceScene from './components/SpaceScene'
import MeteorRain from './components/MeteorRain'

function AstroApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <NextHead
        title='Astro Web Dev'
      />
      <main role='main'>
        <SpaceScene/>
        <MeteorRain/>
        <Component {...pageProps} />
      </main>
    </>
  )
}

export default AstroApp
