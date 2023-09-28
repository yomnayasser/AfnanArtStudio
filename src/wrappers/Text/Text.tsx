import React from 'react';
import {ColorValue} from 'react-native';
import Theme from 'react-native-theming';
import {ThemedTextProps} from 'src/common/types';

import styles from './Text.styles';

type Props = ThemedTextProps & {
  light?: boolean;
  medium?: boolean;
  semiBold?: boolean;
  bold?: boolean;
  xsSmallSize?: boolean;
  sSmallSize?: boolean;
  smallSize?: boolean;
  mediumSize?: boolean;
  normalSize?: boolean;
  xMediumSize?: boolean;
  xxMediumSize?: boolean;
  largeSize?: boolean;
  xLargeSize?: boolean;
  xxLargeSize?: boolean;
  xxxLargeSize?: boolean;
  left?: boolean;
  right?: boolean;
  center?: boolean;
  uppercase?: boolean;
  color?: ColorValue;
  style?: ThemedTextProps;
};
const Text = ({
  children,
  numberOfLines,
  ellipsizeMode,
  light,
  medium,
  semiBold,
  bold,
  xsSmallSize,
  sSmallSize,
  smallSize,
  mediumSize,
  normalSize,
  xMediumSize,
  xxMediumSize,
  largeSize,
  xLargeSize,
  xxLargeSize,
  xxxLargeSize,
  left,
  right,
  center,
  uppercase,
  color,
  style,
}: Props) => {
  let fontSizes = {
    xsSmallSize,
    sSmallSize,
    smallSize,
    mediumSize,
    normalSize,
    xMediumSize,
    xxMediumSize,
    largeSize,
    xLargeSize,
    xxLargeSize,
    xxxLargeSize,
  };

  let textAlignment = {
    left,
    right,
    center,
  };
  const keyChecker = (obj: any) => Object.keys(obj).find(i => obj[i] === true);
  const isStyleArray = Array.isArray(style);

  let mergedStyle = {...styles.text};
  if (isStyleArray) {
    style.forEach(ele => {
      Object.assign(mergedStyle, ele);
    });
  } else {
    Object.assign(mergedStyle, style);
  }

  if (light) {
    Object.assign(mergedStyle, styles.light);
  }
  if (medium) {
    Object.assign(mergedStyle, styles.medium);
  }
  if (semiBold) {
    Object.assign(mergedStyle, styles.semiBold);
  }
  if (bold) {
    Object.assign(mergedStyle, styles.bold);
  }
  if (keyChecker(fontSizes)) {
    Object.assign(mergedStyle, styles[`${keyChecker(fontSizes)}`]);
  }
  if (keyChecker(textAlignment)) {
    Object.assign(mergedStyle, styles[`${keyChecker(textAlignment)}`]);
  }
  if (uppercase) {
    Object.assign(mergedStyle, styles.uppercase);
  }
  if (color) {
    Object.assign(mergedStyle, {color});
  }

  return (
    <Theme.Text
      numberOfLines={numberOfLines}
      ellipsizeMode={ellipsizeMode}
      style={mergedStyle}>
      {children}
    </Theme.Text>
  );
};

export default Text;
