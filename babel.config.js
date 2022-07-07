module.exports = {
  presets: [
    require.resolve('@babel/preset-env'),
    require.resolve('@babel/preset-react'),
    require.resolve('@babel/preset-typescript'),
  ],
  plugins: [
    [
      'babel-plugin-styled-components',
      {
        pure: true,
      },
    ],
  ],
};
