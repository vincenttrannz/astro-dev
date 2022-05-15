import React from 'react'
import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html>
      <Head>
        {/* Google Web fonts */}
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
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
