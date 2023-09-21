import React from 'react';
import {
  TouchableOpacity as RNTouchableOpacity,
  TouchableOpacityProps,
} from 'react-native';
import {createThemedComponent} from 'react-native-theming';

type Props = TouchableOpacityProps;

const TouchableOpacity = ({children, style, ...restProps}: Props) => {
  const ThemedTouchableOpacity = createThemedComponent(RNTouchableOpacity);
  const isStyleArray = Array.isArray(style);

  let mergedStyle = {};
  if (isStyleArray) {
    style.forEach(ele => {
      Object.assign(mergedStyle, ele);
    });
  }

  return (
    <ThemedTouchableOpacity
      style={isStyleArray ? mergedStyle : style}
      {...restProps}>
      {children}
    </ThemedTouchableOpacity>
  );
};

export default TouchableOpacity;
