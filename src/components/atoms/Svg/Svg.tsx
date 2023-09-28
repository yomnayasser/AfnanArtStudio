import React from 'react';
import {ViewStyle} from 'react-native';

export type Props = {
  source: 'Logo';
  width?: number;
  height?: number;
  color?: string;
  rotateDegree?: number;
  opacity?: number;
  style?: ViewStyle;
  onPress?: Function;
};
type svgType = {
  [key: string]: JSX.Element;
};

const Svg = (props: Props) => {
  const SvgNames: svgType = {};

  return SvgNames[props.source];
};

export default Svg;
