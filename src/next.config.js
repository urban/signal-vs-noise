const images = require('remark-images')
const slug = require('remark-slug')
const headings = require('remark-autolink-headings')
const toc = require('remark-toc')
const path = require('path')
const withCSS = require('@zeit/next-css')
const prism = require('@mapbox/rehype-prism')

const { name } = require('../package.json')

const prod = process.env.NODE_ENV === 'production'

module.exports = withCSS({
  // MDX support
  pageExtensions: ['js', 'jsx', 'md', 'mdx'],
  webpack: (config, { defaultLoaders }) => {
    config.resolve.alias =  {
      ...config.resolve.alias,
      "@components": path.resolve(__dirname, './components'),
      "@styles": path.resolve(__dirname, './styles')
    }

    config.module.rules.push({
      test: /\.mdx$/,
      use: [
        defaultLoaders.babel,
        {
          loader: '@mdx-js/loader',
          options: {
            mdPlugins: [images, toc, slug, headings],
            hastPlugins: [prism]
          }
        }
      ]
    })

    return config
  },

  // Static HTML export
  exportPathMap: function(defaultPathMap) {
    return {
      '/': { page: '/' }
    }
  },

  // Link prefix for gh-pages
  assetPrefix: prod ? `/${name}/` : ''
})
