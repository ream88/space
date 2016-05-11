module.exports = {
  entry: "./index.js",
  output: {
    path: __dirname + "/dist",
    filename: "space.js",
    publicPath: "dist"
  },
  module: {
    loaders: [
      { test: /\.jsx?$/, exclude: /node_modules/, loader: "babel" }
    ]
  }
};
