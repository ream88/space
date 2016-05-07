module.exports = {
  entry: "./index.js",
  output: {
    path: __dirname + "/bundle",
    filename: "space.js",
    publicPath: "bundle"
  },
  module: {
    loaders: [
      { test: /\.jsx?$/, exclude: /node_modules/, loader: "babel" }
    ]
  }
};
