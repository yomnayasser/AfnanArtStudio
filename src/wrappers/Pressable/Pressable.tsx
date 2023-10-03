import React from 'react';
import {
  PressableProps,
  Pressable as RNPressable,
  ViewStyle,
} from 'react-native';
import {createThemedComponent, getCurrentTheme} from 'react-native-theming';
import {ThemedViewStyle} from '@common/types';
import {capitalize} from '@common/utils';

interface props extends PressableProps {
  children: React.ReactNode;
  hitSlop?: number;
  isButton?: boolean;
  disabled?: boolean;
  outlined?: boolean;
  variant?: string;
  style?: ThemedViewStyle | ViewStyle[];
  forceStyle?: boolean;
}

const Pressable = ({
  children,
  onPress,
  style,
  hitSlop,
  isButton,
  outlined,
  variant,
  forceStyle,
  ...restProps
}: props) => {
  const ThemedPressable = createThemedComponent(RNPressable, []);
  const isStyleArray = Array.isArray(style);

  let mergedStyle = {};
  if (isStyleArray) {
    style.forEach(ele => {
      Object.assign(mergedStyle, ele);
    });
  } else {
    Object.assign(mergedStyle, style);
  }

  return isButton ? (
    <ThemedPressable
      onPress={onPress}
      style={({pressed}) =>
        pressed
          ? {
              ...mergedStyle,
              backgroundColor: outlined
                ? getCurrentTheme().def[
                    `outlined${capitalize(variant ?? '')}PressedButtonBG`
                  ]
                : getCurrentTheme().def[`${variant}PressedButtonBG`],
              borderColor: outlined
                ? getCurrentTheme().def[
                    `outlined${capitalize(variant ?? '')}PressedButtonBorder`
                  ]
                : getCurrentTheme().def[`${variant}ButtonBG`],
            }
          : {
              ...mergedStyle,
              backgroundColor: outlined
                ? getCurrentTheme().def[
                    `outlined${capitalize(variant)}ButtonBG`
                  ]
                : getCurrentTheme().def[`${variant}ButtonBG`],
              borderColor: outlined
                ? getCurrentTheme().def[
                    `outlined${capitalize(variant)}ButtonBorder`
                  ]
                : null,
            }
      }
      {...restProps}
      hitSlop={hitSlop ?? 5}>
      {children}
    </ThemedPressable>
  ) : (
    <ThemedPressable
      onPress={onPress}
      style={forceStyle ? style : mergedStyle}
      {...restProps}
      hitSlop={hitSlop ?? 5}>
      {children}
    </ThemedPressable>
  );
};

export default Pressable;
