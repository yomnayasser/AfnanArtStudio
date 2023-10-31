import {View, Text, ViewStyle} from 'react-native';
import React from 'react';
import styles from './Separator.styles';
type Props = {
  style?: ViewStyle;
};

const Separator = ({style}: Props) => {
  return <View style={[styles.container, style ? style : {}]} />;
};

export default Separator;
