import {fontSizes, fonts} from '@constants/styles';
import {layouts} from '@constants/styles';

import {StyleSheet} from 'react-native';
export default StyleSheet.create({
  checkboxText: {
    fontFamily: fonts.poppins,
    fontSize: fontSizes.fontNormal,
  },
  checkbox: {
    ...layouts.my.sm,
  },
});
