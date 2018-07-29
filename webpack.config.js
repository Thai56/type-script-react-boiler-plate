module.exports = {
  entry: './src/index.tsx',
  output: {
    filename: './bundle.js',
  },
  devtool: 'source-map',
  devServer: {
    publicPath: '/dist/',
    // host: '127.0.0.1',
    port: 8080,
    open: true
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.js', 'css'], // need to make accept case where nothing is added
  },
  module: {
    rules: [{
        test: /\.tsx?$/,
        loader: 'ts-loader'
      },
      {
        exclude: "/node_modules/",
        test: /\.css$/,
        use: ['style-loader', 'css-loader']
      },
    ],
  },
};