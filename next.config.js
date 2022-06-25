module.exports = {
  distDir: 'build',
  devIndicators: {
    autoPrerender: false,
  },
  publicRuntimeConfig: {
    // Available on both server and client
    theme: 'DEFAULT',
  },
  reactStrictMode: true, 
  images: {
    domains: ['mibuploaddev.s3.ap-south-1.amazonaws.com'],
  },
};
