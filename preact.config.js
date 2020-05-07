import envVars from 'preact-cli-plugin-env-vars';
import CopyWebpackPlugin from 'copy-webpack-plugin';
const preactCliSvgLoader = require('preact-cli-svg-loader');

export default function (config, env, helpers) {
   envVars(config, env, helpers);
   preactCliSvgLoader(config, helpers);
   config.plugins.push( new CopyWebpackPlugin([{ context: `${__dirname}/src/assets`, from: `*.*` }]) );
}