module.exports = {
  entry: './src/entries/index.js',
  output: {
    path: './public',
    filename: 'index.js',
  },
  devServer: {
    port: 3333,
    contentBase: './public',
    inline: true,
    historyApiFallback: true,
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel',
        query: {
          presets: ['react', 'es2015', 'stage-0'],
        },
      },

      {
        test: /\.css$/,
        loaders: ['style', 'css'],
      },
    ],
  },
};
