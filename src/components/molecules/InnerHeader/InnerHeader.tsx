import React from 'react';
import {GestureResponderEvent, Pressable} from 'react-native';

import {Icon} from '@components/index';
import styles from './InnerHeader.styles';
import {Text} from '@wrappers/index';

type Props = {
  onPress: (event: GestureResponderEvent) => void;
  header?: string;
};

const InnerHeader = ({onPress, header}: Props) => {
  return (
    <Pressable style={styles.container} onPress={onPress}>
      <Icon name="arrow-left" style={styles.icon} size={30} />
      <Text largeSize style={styles.text} color={'@darkText'}>
        {header}
      </Text>
    </Pressable>
  );
};

export default InnerHeader;
