/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com'
      }
    ]
  },

  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/i,
      use: {
        loader: '@svgr/webpack',
        options: {
          svgoConfig: {
            plugins: [
              {
                name: 'prefixIds',
                params: {
                  prefixIds: false,
                  prefixClassNames: false
                }
              }
            ]
          }
        }
      }
    })

    // Modify the file loader rule to ignore *.svg, since we have it handled now.
    // fileLoaderRule.exclude = /\.svg$/i

    return config
  }
}

module.exports = nextConfig
