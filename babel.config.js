module.exports = {
  presets: [require.resolve('@babel/preset-react')],
  plugins: [
    [
      'babel-plugin-styled-components',
      {
        pure: true,
      },
    ],
  ],
};
