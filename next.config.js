/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
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
