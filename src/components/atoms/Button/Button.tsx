import layouts from '@constants/styles/layouts';
import {Text, TouchableOpacity} from '@wrappers/index';
import React from 'react';
import styles from './Button.styles';

type Props = {
  title: string;
};

const Button = ({title}: Props) => {
  return (
    <TouchableOpacity style={styles.container}>
      <Text center xxMediumSize style={styles.text}>
        {title}
      </Text>
    </TouchableOpacity>
  );
};

export default Button;
