/** @type {import('webpack/types').Configuration} */
const config = {
  entry: __dirname + '/src/index.js',
  mode: 'production',
  output: {
    path: __dirname + '/build',
    filename: 'index.js',
  },
  module: {
    rules: [
      {
        test: /\.(png|mp3)$/i,
        type: 'asset/inline'
      },
    ],
  },
}

module.exports = config
