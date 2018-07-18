module.exports = {
  entry: './src/index.tsx',
  output: {
    filename: './bundle.js', 
  },
  devtool: 'source-map',
  resolve: {
    extensions: ['.ts', '.tsx', '.js'], // need to make accept case where nothing is added
  },
  module: {
    rules: [
      { test: /\.tsx?$/, loader: 'ts-loader' },
    ],
  },
};
