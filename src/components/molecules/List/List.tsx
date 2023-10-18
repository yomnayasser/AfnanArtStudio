import React from 'react';

import styles from './List.styles';
import {Text, View} from '@wrappers/index';
type Props = {
  number?: boolean;
  listData: string[];
};

const List = ({number, listData}: Props) => {
  return (
    <View>
      {listData?.map((data, index) => {
        return (
          <Text style={styles.list}>
            <Text color={'@primaryButtonBG'}>
              {number ? index + 1 + '-' : '•'}{' '}
            </Text>
            {data}
          </Text>
        );
      })}
    </View>
  );
};

export default List;
