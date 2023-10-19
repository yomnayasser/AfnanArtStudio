import React from 'react';
import {GestureResponderEvent, Pressable} from 'react-native';

import {Icon} from '@components/index';
import styles from './ScreenHeader.styles';

type Props = {
  onPress: (event: GestureResponderEvent) => void;
};

const ScreenHeader = ({onPress}: Props) => {
  return (
    <Pressable style={styles.container} onPress={onPress}>
      <Icon name="arrow-left" style={styles.icon} color="@backIcon" size={30} />
      {/* <Text medium largeSize>
        {header + ':'}
      </Text> */}
    </Pressable>
  );
};

export default ScreenHeader;
