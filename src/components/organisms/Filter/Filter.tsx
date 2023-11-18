import React from 'react';
import {t} from 'i18next';

import {Icon} from '@components/index';
import styles from './Filter.styles';
import {Pressable, Text, View} from '@wrappers/index';

const Filter = ({onPressFilter, onPressSort}) => {
  return (
    <View style={styles.filterContainer}>
      {onPressSort && (
        <Pressable style={styles.sortContainer} onPress={onPressSort}>
          <Text mediumSize medium>
            {t('sort_by')}
          </Text>
          <Icon
            name="arrow-down-1"
            style={styles.sortIcon}
            size={18}
            color="@sortIcon"
          />
        </Pressable>
      )}

      {onPressFilter && (
        <Pressable onPress={onPressFilter}>
          <Icon name="filter-2" style={styles.filterIcon} size={28} />
        </Pressable>
      )}
    </View>
  );
};

export default Filter;
