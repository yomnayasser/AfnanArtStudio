import {ThemedImageStyle, ThemedViewStyle} from '@common/types';
import React from 'react';
import Theme from 'react-native-theming';

type Props = {
  source: string;
  style?: ThemedViewStyle | ThemedImageStyle | any;
};

const Image = ({source, style}: Props) => {
  return <Theme.Image style={style} source={source} />;
};

export default Image;
