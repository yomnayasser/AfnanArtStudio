import {TextStyle, ViewStyle, ImageStyle} from 'react-native';
type ThemeVariable = string | undefined;
type lineHeightVariable = string | number | null;
type ThemedTypes = 'fontSize' | 'fontWeight' | 'lineHeight';

export type ThemedViewStyle = ViewStyle;
export type ThemedTextStyle = Omit<TextStyle, ThemedTypes> & {
  fontSize?: ThemeVariable;
  fontWeight?: ThemeVariable;
  lineHeight?: lineHeightVariable;
};
export type ThemedImageStyle = ImageStyle;
