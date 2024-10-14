import { Configuration } from "webpack";
import { merge } from "webpack-merge";

import common from "./webpack.common";

import "webpack-dev-server";

const developmentConfig: Configuration = {
  mode: "development",
  output: {
    filename: "[name].bundle.js",
  },
  devtool: "eval-cheap-source-map",
  devServer: {
    static: "./dist",
    compress: true,
    historyApiFallback: true,
    open: true,
    client: {
      overlay: {
        errors: true,
        warnings: false,
      },
    },
  },
};

export default merge(common, developmentConfig);
