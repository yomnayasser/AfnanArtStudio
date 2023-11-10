import React from 'react';
import {Text, View} from '@wrappers/index';
import styles from './ScreenHeader.styles';
type Props = {
  headerText: string;
};

const ScreenHeader = ({headerText}: Props) => {
  return (
    <View style={styles.container}>
      <Text xMediumSize medium style={styles.text}>
        {headerText}
      </Text>
    </View>
  );
};

export default ScreenHeader;
