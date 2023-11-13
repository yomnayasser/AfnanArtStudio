import React, {ReactNode} from 'react';

import {Pressable, Text, View} from '@wrappers/index';
import {Icon} from '@components/index';
import styles from './ActionSheetBase.styles';
import {SheetManager} from 'react-native-actions-sheet';

type Props = {
  sheetId: string;
  iconName: string;
  text: string;
  actionSheetContent: ReactNode;
};

const ActionSheetBase = ({
  sheetId,
  iconName,
  text,
  actionSheetContent,
}: Props) => {
  return (
    <View style={styles.container}>
      <Pressable
        onPress={async () => {
          await SheetManager.hide(sheetId);
        }}>
        <Icon name="close" style={styles.close} color="@backIcon" />
      </Pressable>
      <Icon
        name={iconName}
        size={90}
        style={styles.icon}
        color="@primaryText"
      />
      <Text center medium xMediumSize style={styles.text}>
        {text}
      </Text>
      <View>{actionSheetContent}</View>
    </View>
  );
};

export default ActionSheetBase;
