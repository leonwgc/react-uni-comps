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
    port: 9400,
  },
  resolve: {
    alias: {
      'react-uni-comps': path.resolve(__dirname, './src'),
    },
  },
});
