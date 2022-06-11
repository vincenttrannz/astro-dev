import '../styles/master.scss'
import App from "next/app";
import type { AppProps } from 'next/app'
import React, { useEffect } from 'react'
import { createContext } from "react";
import { fetchAPI } from "../lib/api";
import { getStrapiMedia, getStrapiData } from "../lib/fetchData";
import NextHead from './section/NextHead'
import SpaceScene from './components/SpaceScene'
import MeteorRain from './components/MeteorRain'
import Navi from './components/Navi'
import Footer from './components/Footer'
import AOS from 'aos';

// Store Strapi Global object in context
export const GlobalContext = createContext({});

function AstroApp({ Component, pageProps }: AppProps) {
  const { global } = pageProps;
  console.log("App global data:", global);
  useEffect(() => {
    AOS.init()
  }, [])
  return (
    <>
      <NextHead
        favicon={getStrapiMedia(global.attributes.Favicon)}
        sitename={getStrapiData(global).SiteName}
        title={getStrapiData(global).SeoData.MetaTitle}
      />
      <GlobalContext.Provider value={global.attributes}>
        <main role='main'>
          <Navi/>
          <SpaceScene/>
          <MeteorRain/>
          <Component {...pageProps} />
          <Footer/>
        </main>
      </GlobalContext.Provider>
    </>
  )
}

AstroApp.getInitialProps = async (ctx: any) => {
  // Calls page's `getInitialProps` and fills `appProps.pageProps`
  const appProps = await App.getInitialProps(ctx);
  // Fetch global site settings from Strapi
  const query = { populate: "*" };
  const globalRes = await fetchAPI("/global", query);
  // Pass the data to our page via props
  return { ...appProps, pageProps: { global: globalRes.data }};
};

export default AstroApp
