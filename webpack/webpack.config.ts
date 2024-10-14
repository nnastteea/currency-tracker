import { Configuration } from "webpack";
import { merge } from "webpack-merge";

import commonConfig from "./webpack.common";

export default (env: string): Configuration => {
  const config = require(`./webpack.${env}`);
  return merge(commonConfig, config);
};
