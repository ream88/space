module.exports = {
  devtool: "source-map",
  entry: {
    spaced: "./src/components/index.js",
    example: "./example.js"
  },
  output: {
    filename: "[name].js",
    libraryTarget: "umd",
    path: __dirname + "/dist",
    publicPath: "dist"
  },
  module: {
    loaders: [
      { test: /\.jsx?$/, exclude: /node_modules/, loader: "babel" }
    ]
  }
};
