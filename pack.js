const { default: pack } = require('packx');
const path = require('path');

pack(true, {
  entry: {
    index: `./demo/index`,
  },
  devServer: {
    port: 9100,
  },
  resolve: {
    alias: {
      'react-uni-comps': path.resolve(__dirname, './src'),
    },
  },
});
