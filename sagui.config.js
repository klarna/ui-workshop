/**
 * Sagui configuration object
 * see: http://sagui.js.org/
 */
module.exports = {
  pages: ['index'],

  javaScript: {
    transpileDependencies: ['@klarna/ui']
  },

  style: {
    cssModules: false
  },

  webpack: {
    babel: {
      babelrc: false,
      presets: ['sagui']
    }
  }
}
