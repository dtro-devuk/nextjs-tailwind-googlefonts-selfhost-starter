const withPlugins = require('next-compose-plugins');

const debug = process.env.NODE_ENV !== 'production';

const env = {
  CANONICAL_URL: '',
};

const basePath = !debug ? '/nextjs-tailwind-googlefonts-selfhost-starter' : '';
const assetPrefix = !debug ? '/nextjs-tailwind-googlefonts-selfhost-starter/' : '';

module.exports = withPlugins([
  {
    env,
    basePath,
    assetPrefix,

    // webpack: (config) => {
    //   config.module.rules.push(
    //     {
    //       test: /\.(woff(2)?|ttf|eot|svg)(\?v=\d+\.\d+\.\d+)?$/,
    //       use: [
    //         {
    //           loader: 'file-loader',
    //           options: {
    //             esModule: false,
    //             outputPath: 'static/fonts/',
    //             publicPath: './public/static/fonts/',
    //             // optional, just to prettify file names
    //             name: '[name].[ext]',
    //           },
    //         },
    //       ],
    //     }
    //     // ...
    //   );
    //   return config;
    // },
  },
]);
