import React from 'react';
import {ViewStyle} from 'react-native';

import {View} from '@wrappers/index';
import styles from './HorizontalSeparator.styles';

type Props = {
  style?: ViewStyle;
};

const HorizontalSeparator = ({style}: Props) => {
  return <View style={[styles.separator, style ? style : {}]} />;
};

export default HorizontalSeparator;
