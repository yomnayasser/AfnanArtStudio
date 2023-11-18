import {t} from 'i18next';
import React from 'react';
import {GestureResponderEvent} from 'react-native';
import {SheetManager} from 'react-native-actions-sheet';

import {Icon} from '@components/index';
import styles from './FilterSheetHeader.styles';
import {Pressable, Text, View} from '@wrappers/index';

type Props = {
  sheetName: string;
  clear: (event: GestureResponderEvent) => void;
};

const FilterSheetHeader = ({sheetName, clear}: Props) => {
  return (
    <View style={styles.filterHeader}>
      <Pressable onPress={clear}>
        <Text style={styles.delete} color={'@primaryText'}>
          {t('clear')}
        </Text>
      </Pressable>
      <Text xMediumSize medium style={styles.header}>
        {t('filter_by')}
      </Text>
      <Pressable
        onPress={() => {
          SheetManager.hide(sheetName);
        }}>
        <Icon name="close" size={20} style={styles.icon} color="@backIcon" />
      </Pressable>
    </View>
  );
};

export default FilterSheetHeader;
