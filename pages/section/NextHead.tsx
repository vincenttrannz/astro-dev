import Head from 'next/head'
import React from 'react';
import { useRouter } from 'next/router'

interface Props {
  sitename?: string;
  quote?: string;
  title?: string;
  image?: string;
  favicon?: string;
  description?: string;
  hashtag?: string;
}

const HeadData: React.FC<Props> = ({
  sitename,
  quote,
  title,
  image,
  favicon,
  description,
  hashtag,
}) => {
  const origin = typeof window !== 'undefined' && window.location.origin ? window.location.origin : '';
  const location = useRouter();
  const currentUrl = origin + location.asPath;
  
  return (
    <Head>
      <title>{title}</title>
      <link
        rel="shortcut icon"
        href={favicon}
      />
      <meta charSet="utf-8" />
      <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
      <meta name="csrf_token" content="" />
      <meta property="type" content="website" />
      <meta property="url" content={currentUrl} />
      <meta
        name="viewport"
        content="width=device-width, initial-scale=1, shrink-to-fit=no"
      />
      <meta name="msapplication-TileColor" content="#ffffff" />
      <meta name="msapplication-TileImage" content="/ms-icon-144x144.png" />
      <meta name="theme-color" content="#ffffff" />
      <meta name="_token" content="" />
      <meta name="robots" content="noodp" />
      <meta property="title" content={title} />
      <meta property="quote" content={quote} />
      <meta name="description" content={description} />
      <meta property="image" content={image} />
      <meta property="og:locale" content="en_US" />
      <meta property="og:type" content="website" />
      <meta property="og:title" content={title} />
      <meta property="og:quote" content={quote} />
      <meta property="og:hashtag" content={hashtag} />
      <meta property="og:image" content={image} />
      <meta content="image/*" property="og:image:type" />
      <meta property="og:url" content={currentUrl} />
      <meta property="og:site_name" content={sitename} />
      <meta property="og:description" content={description} />
      
      {/* Animate CSS */}
      {/* <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css"
      /> */}
    </Head>
  );
};

export default HeadData;
