const path = require("path");

module.exports = {
  entry: "./src/index.js", // Your entry point
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "bundle.js",
  },
  module: {
    rules: [
      {
        test: /\.js$/, // Match JavaScript files
        exclude: /node_modules/, // Exclude all other node_modules except mapbox-gl
        use: {
          loader: "babel-loader",
          options: {
            presets: [
              "@babel/preset-env", // Use the default Babel preset for ES6+ compatibility
              "@babel/preset-react", // For React support
            ],
            ignore: ["./node_modules/mapbox-gl/dist/mapbox-gl.js"], // Exclude Mapbox from transpilation
          },
        },
      },
      {
        test: /\.css$/, // Match CSS files
        use: ["style-loader", "css-loader"], // Loaders for handling CSS
      },
    ],
  },
  resolve: {
    fallback: {
      util: require.resolve("util/"), // Add fallback for Node.js polyfills
    },
  },
  devServer: {
    contentBase: path.join(__dirname, "dist"), // Serve content from the output directory
    compress: true,
    port: 3000, // Development server port
  },
};
