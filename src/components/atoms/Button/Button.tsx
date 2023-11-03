/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {GestureResponderEvent} from 'react-native';
import {getCurrentTheme} from 'react-native-theming';

import styles from './Button.styles';
import {capitalize} from '@common/utils';
import {ThemedViewStyle} from '@common/types';
import {Pressable, Text, View} from '@wrappers/index';

type props = {
  title: string;
  onPress: (
    event: GestureResponderEvent,
  ) => void | null | undefined | Promise<void>;
  fullWidth?: boolean;
  primary?: boolean;
  secondary?: boolean;
  danger?: boolean;
  light?: boolean;
  outlined?: boolean;
  disabled?: boolean;
  loading?: boolean;
  style?: ThemedViewStyle;
  loadingColor?: string;
  buttonColor?: string;
};

const Button = ({
  title,
  onPress,
  fullWidth,
  primary,
  secondary,
  danger,
  light,
  disabled,
  outlined,
  loading,
  style,
  loadingColor,
}: props) => {
  const variantName = primary
    ? 'primary'
    : secondary
    ? 'secondary'
    : danger
    ? 'danger'
    : light
    ? 'light'
    : 'primary';

  return (
    <Pressable
      hitSlop={5}
      onPress={onPress}
      disabled={disabled || false}
      variant={variantName}
      outlined={outlined || false}
      style={[
        outlined
          ? {...styles.buttonOutlined, ...style}
          : {...styles.button, ...style},
        disabled
          ? {
              ...styles.button,
              ...styles.halfOpacity,
            }
          : {...styles.button, ...style},
        fullWidth ? styles.fullWidth : {},
      ]}
      isButton>
      {loading ? (
        <Loader
          size="small"
          color={loadingColor ?? secondary ? '@loading' : 'white'}
          style={styles.activityIndicatorStyle}
        />
      ) : (
        <View style={styles.titleContainer}>
          <Text
            semiBold
            style={
              outlined
                ? {
                    ...styles.outlinedButtonText,
                    color:
                      getCurrentTheme().def[
                        `outlined${capitalize(variantName ?? '')}ButtonText`
                      ],
                  }
                : variantName === 'light'
                ? {color: '@primaryText'}
                : styles.buttonText
            }>
            {title}
          </Text>
        </View>
      )}
    </Pressable>
  );
};

export default Button;
