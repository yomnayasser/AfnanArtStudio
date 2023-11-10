// import fontSizes from '@constants/styles/fontSizes';
import {fontSizes} from '@constants/styles';
import colors from '../styles/colors';

const primary = {
  bg: colors.aqua[30], //#cbe3df
  bg1: colors.aqua[40], //#c7eeeb
  bg2: colors.aqua[50], //#c6ebe3
  light: colors.aqua[80], //#6cdbd2
  light2: colors.aqua[60], //#98e5db
  default: colors.aqua[150], //#069987
  dark: colors.aqua[100], //#0cb2a4
};
const secondary = {
  default: colors.orange[100], //#FF7260,
  dark: colors.orange[200], //#FF634D
};

const black = {
  light: colors.black[20], //#505050,
  default: colors.black[100], //#141414
};

const error = {
  bg: colors.red[25], //#FEEBF0
  dark: colors.red[100], //#B91231
  default: colors.red[50], //#D52942
};

const white = {
  default: colors.white[100], //#fff
  dark: colors.white[150], //#e6e6e4
};
const gray = {
  bg: colors.gray[60], //'#97A8BB'
  bg1: colors.gray[70], //#7C96B0

  light: colors.gray[40], //'#B6C7DA'
  light1: colors.gray[50], //#95AAC2

  dark: colors.gray[200], //#415261

  default: colors.gray[100], //#435363
};

export const light = {
  ...fontSizes,
  primaryButtonText: white.default,
  darkText: black.default,
  background: white.dark,
  primaryButton: primary.dark,
  primaryButton2: primary.light,
  primaryText: primary.default,
  disabledText: gray.light,
  grayText: gray.bg1,
  errorText: error.default,

  // Primary button
  primaryButtonBG: primary.default,
  primaryPressedButtonBG: primary.dark,

  // secondary button
  secondaryButtonBG: secondary.default,
  secondaryPressedButtonBG: secondary.dark,

  //  danger button
  dangerButtonBG: error.default,
  dangerPressedButtonBG: error.dark,

  //light button
  lightButtonBG: white.default,
  lightPressedButtonBG: primary.bg,
  //outlined
  outlinedPrimaryButtonBG: white.default,
  outlinedPrimaryButtonBorder: primary.default,
  outlinedPrimaryPressedButtonBorder: primary.default,
  outlinedPrimaryButtonText: primary.default,

  outlinedSecondaryButtonBG: white.default,
  outlinedSecondaryButtonBorder: secondary.default,
  outlinedSecondaryPressedButtonBorder: secondary.default,
  outlinedSecondaryButtonText: secondary.default,

  outlinedDangerButtonBG: white.default,
  outlinedDangerPressedButtonBorder: error.default,
  outlinedDangerButtonBorder: error.default,
  outlinedDangerButtonText: error.default,

  //textInput
  textInputBg: primary.bg,
  textInputError: error.default,

  //icons
  backIcon: gray.light1,
  startIcon: primary.default,
  bottomTabActiveIcon: primary.default,
  bottomTabInActiveIcon: black.default,
  sortIcon: black.default,

  //table
  tableBorderColor: primary.default,
  tableBG: primary.bg,

  //slider
  activeDot: primary.light,
  inactiveDot: primary.default,

  //tabView
  tabViewBg: primary.bg,
  tabViewActiveColor: primary.dark,

  //loader
  loaderColor: primary.default,

  //card
  cardBg: primary.bg,

  //progress circle
  progressCircle: primary.default,

  //Bg
  primaryBg: primary.bg,

  //radioButton
  radioBorderColor: primary.default,
  radioActiveColor: primary.dark,

  //studentDashboard
  studentDashboardCardBg: white.default,
};
