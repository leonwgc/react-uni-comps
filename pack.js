const { default: pack } = require('packw');
const path = require('path');

pack(true, {
  entry: {
    index: `./demo/index`,
  },
  output: {
    path: path.resolve(__dirname, 'output'),
  },
  devServer: {
    port: 9100,
  },
  resolve: {
    alias: {
      'react-uni-comps': path.resolve(__dirname, './src'),
    },
  },
  // module: {
  //   rules: [
  //     {
  //       test: /\.(t|j)sx?$/,
  //       exclude: /(node_modules)/,
  //       use: {
  //         // `.swcrc` can be used to configure swc
  //         loader: 'swc-loader',
  //         options: {
  //           parseMap: true,
  //         },
  //       },
  //     },
  //   ],
  // },
});
