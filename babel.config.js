module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    [
      'module-resolver',
      {
        alias: {
          '@store': './src/store',
          '@forms': './src/forms',
          '@common': './src/common',
          '@fakers': './src/fakers',
          '@sheets': './src/sheets',
          '@screens': './src/screens',
          '@wrappers': './src/wrappers',
          '@constants': './src/constants',
          '@components': './src/components',
          '@navigation': './src/navigation',
        },
      },
    ],
    // // ['transform-remove-console', {exclude: ['error', 'warn']}],
    // //always put this plugin at the end of the list
    'react-native-reanimated/plugin',
  ],
};
