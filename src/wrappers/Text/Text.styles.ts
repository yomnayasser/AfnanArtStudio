import {fonts} from '@constants/styles';
import {StyleSheet} from 'react-native';
import {ThemedTextStyle} from 'src/common/types';

type Styles = {
  [key: string]: ThemedTextStyle;
};

export default StyleSheet.create<Styles>({
  text: {
    color: '@text',
    fontSize: '@fontNormal',
    fontFamily: fonts.poppins,
    textAlign: 'left',
  },
  light: {
    fontFamily: fonts.poppinsLight,
  },
  medium: {
    fontFamily: fonts.poppinsMedium,
  },
  semiBold: {
    fontFamily: fonts.poppinsSemiBold,
  },
  bold: {
    fontFamily: fonts.poppinsBold,
  },
  xsSmallSize: {
    fontSize: '@fontXsSmall',
  },
  sSmallSize: {
    fontSize: '@fontsSmall',
  },
  smallSize: {
    fontSize: '@fontSmall',
  },
  mediumSize: {
    fontSize: '@fontMedium',
  },
  normalSize: {
    fontSize: '@fontNormal',
  },
  xMediumSize: {
    fontSize: '@fontXMedium',
  },
  xxMediumSize: {
    fontSize: '@fontXXMedium',
  },
  largeSize: {
    fontSize: '@fontLarge',
  },
  xLargeSize: {
    fontSize: '@fontXLarge',
  },
  xxLargeSize: {
    fontSize: '@fontXXLarge',
  },
  xxxLargeSize: {
    fontSize: '@fontXXXLarge',
  },

  left: {
    textAlign: 'left',
  },

  right: {
    textAlign: 'right',
  },

  center: {
    textAlign: 'center',
  },

  uppercase: {
    textTransform: 'uppercase',
  },
});
