import '../styles/master.scss'
import type { AppProps } from 'next/app'
import React, { useEffect } from 'react'
import NextHead from './section/NextHead'
import SpaceScene from './components/SpaceScene'
import MeteorRain from './components/MeteorRain'
import AOS from 'aos';

function AstroApp({ Component, pageProps }: AppProps) {
  useEffect(() => {
    AOS.init()
  }, [])
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
