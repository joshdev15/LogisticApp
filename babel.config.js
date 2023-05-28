module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    [
      require.resolve('babel-plugin-module-resolver'),
      {
        root: ['./src'],
        alias: {
          '@components': './src/components',
          '@contexts': './src/contexts',
          '@constants': './src/constants',
          '@models': './src/models',
          '@pages': './src/pages',
          '@hooks': './src/hooks',
          '@svg': './src/assets/svg',
          '@images': './src/assets/images',
        },
      },
    ],
  ],
};
