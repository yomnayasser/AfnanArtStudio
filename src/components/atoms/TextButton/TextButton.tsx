import React from 'react';
import {ViewStyle} from 'react-native';

import Icon from '../Icon/Icon';
import styles from './TextButton.styles';
import {Text, View} from '@wrappers/index';
import {StudentsDashboardScreen} from '@navigation/navigationTypes';
import {useNavigation} from '@react-navigation/native';
import {courseDetailsTypes} from '@common/types';
type Props = {
  text: string;
  style?: ViewStyle | undefined;
  disabled: boolean;
  course: courseDetailsTypes;
};

const TextButton = ({text, style, disabled}: Props) => {
  return (
    <View style={[styles.container, style ? style : {}]}>
      <Text medium color={disabled ? '@backIcon' : '@primaryText'}>
        {text}
      </Text>
      <Icon
        name="arrow-right-3"
        size={16}
        style={styles.icon}
        color={disabled ? '@backIcon' : '@primaryText'}
      />
    </View>
  );
};

export default TextButton;
