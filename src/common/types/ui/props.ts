import {Animated, StyleProp, TextProps, ViewProps} from 'react-native';
import {ThemedTextStyle, ThemedViewStyle} from './styles';

type MaybeAnimated<T> = T | Animated.Value;
type AnimatedScalar = string | number;
type AnimatedStyle<T> = StyleProp<{
  [Key in keyof T]: T[Key] extends AnimatedScalar
    ? MaybeAnimated<T[Key]>
    : T[Key] extends Array<infer U>
    ? Array<AnimatedStyle<U>>
    : AnimatedStyle<T[Key]>;
}>;

export type ThemedViewProps = Omit<ViewProps, 'style'> & {
  style?: AnimatedStyle<ThemedViewStyle>;
};
export type ThemedTextProps = Omit<TextProps, 'style'> & {
  style?: AnimatedStyle<ThemedTextStyle>;
};
