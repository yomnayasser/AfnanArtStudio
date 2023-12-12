import {StyleSheet} from 'react-native';
import {getCurrentTheme} from 'react-native-theming';

import {fontSizes, fonts} from '@constants/styles';
import layouts, {spacing} from '@constants/styles/layouts';

const theme = getCurrentTheme().def;
const {textInputBg} = theme;

export default StyleSheet.create({
  inputContainer: {
    backgroundColor: textInputBg,
    padding: spacing.xl + 2,
    ...layouts.rounded,
    ...layouts.bordered,
    ...layouts.row,
    ...layouts.justifyBetween,
    width: 300,
  },
  input: {
    width: 200,
    fontSize: fontSizes.fontMedium,
    fontFamily: fonts.poppinsMedium,
  },
  icon: {...layouts.mx.xs},
  error: {
    width: 200,
    ...layouts.ms.sm,
    ...layouts.mt.sm,
  },
});
