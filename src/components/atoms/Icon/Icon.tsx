import React from 'react';
import {createThemedComponent} from 'react-native-theming';

import {px} from '@common/utils';
import RNCustomIcon from './CustomIcon';
import {ThemedTextStyle, ThemedViewStyle} from '@common/types';
import {ImageStyle} from 'react-native';

const ThemedCustomIcon = createThemedComponent(RNCustomIcon, ['color']);

type Props = {
  name: string;
  color?: string;
  size?: number;
  style?: ThemedViewStyle | (ImageStyle | ThemedTextStyle)[] | {color: string};
};

const Icon = ({name, color, size, style}: Props) => {
  return (
    <ThemedCustomIcon
      name={name}
      color={color ? color : '@icon'}
      size={size ? px(size) : px(25)}
      style={style}
    />
  );
};
export default Icon;
