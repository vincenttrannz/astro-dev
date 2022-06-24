import React from 'react'
import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html>
      <Head>
        <base href="/" />
        {/* Google Web fonts */}
        <link rel="preconnect" href="https://fonts.googleapis.com"/>
        <link href="https://fonts.googleapis.com/css?family=Montserrat:400,700" rel="stylesheet"/>
        <link href="https://fonts.googleapis.com/css?family=Poppins" rel="stylesheet"/>
        {/* DEV ICON */}
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/devicons/devicon@master/devicon.min.css"></link>
        {/* Font icons */}
        <link rel="stylesheet" href="icon-fonts/font-awesome-5.14.0/css/all.min.css"/>
        <link rel="stylesheet" href="icon-fonts/font-awesome-5.14.0/css/brands.min.css"/>
        <link rel="stylesheet" href="icon-fonts/font-awesome-5.14.0/css/fontawesome.min.css"/>
        <link rel="stylesheet" href="icon-fonts/font-awesome-5.14.0/css/regular.min.css"/>
        <link rel="stylesheet" href="icon-fonts/font-awesome-5.14.0/css/solid.min.css"/>
        <link rel="stylesheet" href="icon-fonts/font-awesome-5.14.0/css/svg-with-js.min.css"/>
        <link rel="stylesheet" href="icon-fonts/font-awesome-5.14.0/css/v4-shims.min.css"/>
        {/* Essential regular icon */}
        <link rel="stylesheet" href="icon-fonts/essential-regular-fonts/essential-icons.css"/>
        {/* <!-- React Slick Carousel --> */}
        <link
          rel="stylesheet"
          type="text/css"
          charSet="UTF-8"
          href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css"
        />
        <link
          rel="stylesheet"
          type="text/css"
          href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css"
        />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
