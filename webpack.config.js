// Import necessary modules
const path = require('path'); // Import the path module for handling file paths
const HtmlWebpackPlugin = require('html-webpack-plugin'); // Import HtmlWebpackPlugin to simplify HTML file generation

module.exports = {
  // Set the mode to development for better debugging and error messages
  mode: 'development',

  // Specify the entry point of the application
  entry: './src/index.js',

  // Configure the output settings
  output: {
    filename: 'bundle.js', // Name of the output bundle file
    path: path.resolve(__dirname, 'dist') // Path where the bundle will be saved
  },

  // Configure the development server settings
  devServer: {
    contentBase: './dist', // Serve content from the 'dist' directory
  },

  // Specify the plugins used in the build process
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html' // Use the specified HTML template for the output
    })
  ],

  // Define module rules for processing different file types
  module: {
    rules: [
      {
        // Test for CSS files
        test: /\.css$/,
        use: ['style-loader', 'css-loader'], // Use style-loader and css-loader for processing CSS files
      }
    ]
  }
};
