import React from 'react';
import {t} from 'i18next';

import {Icon} from '@components/index';
import styles from './Filter.styles';
import {Text, View} from '@wrappers/index';

const Filter = () => {
  return (
    <View style={styles.filterContainer}>
      <View style={styles.sortContainer}>
        <Text mediumSize medium>
          {t('sort_by')}
        </Text>
        <Icon
          name="arrow-down-1"
          style={styles.sortIcon}
          size={18}
          color="@sortIcon"
        />
      </View>
      <Icon name="filter-2" style={styles.filterIcon} size={28} />
    </View>
  );
};

export default Filter;
