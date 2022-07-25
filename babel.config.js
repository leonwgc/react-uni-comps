const presets = [
  require.resolve('@babel/preset-env'),
  require.resolve('@babel/preset-react'),
  require.resolve('@babel/preset-typescript'),
];

module.exports = (api) => {
  const isTest = api.env('test');

  return {
    presets: isTest ? presets : undefined,
    plugins: [
      [
        'babel-plugin-styled-components',
        {
          pure: true,
        },
      ],
    ],
  };
};
