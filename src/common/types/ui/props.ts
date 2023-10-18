import {
  Animated,
  StyleProp,
  TextInputAndroidProps,
  TextInputIOSProps,
  TextProps,
  ViewProps,
} from 'react-native';
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

export type TextInputProps = Omit<
  TextInputAndroidProps | TextInputIOSProps,
  | 'style'
  | 'field'
  | 'form'
  | 'keyboardType'
  | 'placeholder'
  | 'onChangeTxt'
  | 'currencyInput'
  | 'multiline'
  | 'numberOfLines'
  | 'resetable'
  | 'isSelect'
  | 'disabled'
  | 'hideErrors'
  | 'onInputPressedIn'
  | 'fullWidth'
  | 'borderless'
  | 'resetHandler'
  | 'maxLength'
> & {
  style?: AnimatedStyle<ThemedViewStyle>;
  field: any;
  form: any;
  keyboardType: string;
  placeholder: string;
  onChangeTxt: Function;
  currencyInput: string;
  multiline: boolean;
  numberOfLines: number;
  resetable: boolean;
  isSelect: boolean;
  disabled: boolean;
  hideErrors: boolean;
  onInputPressedIn: Function;
  fullWidth: boolean;
  borderless: boolean;
  resetHandler: Function;
  maxLength: number;
};

export type LoginFormValues = {
  userName: string;
  password: string;
};

export type courseDetailsTypes = {
  name: string;
  image: string;
  experience: string;
  outcomes: string[];
  packagesName: string[];
  packagesPrices: string[][];
  notes: string[];
  sessionDuration: number;
};
