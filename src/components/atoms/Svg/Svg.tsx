import {Facebook, Instagram} from '@constants/assets';
import React from 'react';
import {ViewStyle} from 'react-native';

export type Props = {
  source: string;
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
  const SvgNames: svgType = {
    facebook: <Facebook props={props} />,
    instagram: <Instagram props={props} />,
  };

  return SvgNames[props.source];
};

export default Svg;
