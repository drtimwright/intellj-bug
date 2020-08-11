const path = require('path');

module.exports = {
  entry: path.resolve(__dirname, 'src/index.ts'),
  mode: 'development',
  devtool: 'inline-source-map',
  module: {
    rules: [
      {
        test: /\.(ts|tsx)$/,
        use: [{ loader: 'ts-loader' }],
        exclude: /node_modules/,
      },
      // All output '.js' files will have any sourcemaps re-processed by 'source-map-loader'.
      {
        enforce: 'pre',
        test: /\.js$/,
        loader: 'source-map-loader',
      },
    ],
  },
  resolve: {
    alias: {
      '~': path.resolve(__dirname, 'src'),
    },
    extensions: ['.tsx', '.ts', '.js'],
    plugins: [],
  },
  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, 'build/'),
  },
};
