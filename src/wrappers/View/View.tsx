import React from 'react';
import Theme from 'react-native-theming';
import {ViewStyle} from 'react-native';
import styles from './View.styles';
import {ThemedViewProps} from 'src/common/types';

type Props = ThemedViewProps & {
  isLoading?: boolean;
  defaultHeight?: string | number;
  loadable?: boolean;
};

const View = ({children, style, ...reset}: Props) => {
  const isStyleArray = Array.isArray(style);

  let mergedStyle = {};
  if (isStyleArray) {
    style.forEach(ele => {
      Object.assign(mergedStyle, ele);
    });
  } else {
    Object.assign(mergedStyle, style);
  }

  return (
    <Theme.View style={mergedStyle} {...reset}>
      {children}
    </Theme.View>
  );
};

export default View;
