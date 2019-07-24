const webpack = require("webpack");
const merge = require("webpack-merge");
const path = require("path");

var config = {
  output: {
    path: path.resolve(__dirname + "/dist/")
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        loader: "babel",
        include: __dirname,
        exclude: /node_modules/
      },
      {
        test: /\.vue$/,
        loader: "vue"
      },
      {
        test: /\.css$/,
        loader: "style!less!css"
      }
    ]
  },
  externals: {
    moment: "moment",
    bootstrapvue: "bootstrap-vue",
    cssvarsponyfill: "css-vars-ponyfill"
  },
  plugins: [
    new webpack.optimize.UglifyJsPlugin({
      minimize: true,
      sourceMap: false,
      mangle: true,
      compress: {
        warnings: false
      }
    })
  ]
};

module.exports = [
  merge(config, {
    entry: path.resolve(__dirname + "/src/components/index.js"),
    output: {
      filename: "vue-bs-timeline.min.js",
      libraryTarget: "window",
      library: "VueBSTimeline"
    }
  }),
  merge(config, {
    entry: path.resolve(__dirname + "/src/components/VueBSTimeline.vue"),
    output: {
      filename: "vue-bs-timeline.js",
      libraryTarget: "umd",
      library: "vue-bs-timeline",
      umdNamedDefine: true
    }
  })
];
