module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    [
      'module-resolver',
      {
        alias: {
          '@screens': './src/screens',
          '@wrappers': './src/wrappers',
          '@constants': './src/constants',
          '@components': './src/components',
        },
      },
    ],
    // // ['transform-remove-console', {exclude: ['error', 'warn']}],
    // //always put this plugin at the end of the list
    // 'react-native-reanimated/plugin',
  ],
};
