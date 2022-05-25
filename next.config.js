/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  images: {
    loader: "default",
    domains: ["localhost", "astro-test.co.nz"],
  },
  webpack(config){
    config.module.rules.push(
      {
        test: /\.(glsl|vs|fs)$/,
        loader: 'ts-shader-loader'
      }
    );
    return config;
  }
}

module.exports = nextConfig
