module.exports = {
  entry: './app.js',
  output: {
    filename: 'bundle.js',
  },
  mode: 'none',
  module: {
    rules: [{
      test: /\.scss$/,
      use: [
        { loader: 'style-loader' },
        { loader: 'css-loader' },
        {
          loader: 'postcss-loader',
          options: {
            plugins() {
              return [
                require('precss'),
                require('autoprefixer')
              ];
            },
          },
        },
        { loader: 'sass-loader' },
      ],
    }],
  },
};