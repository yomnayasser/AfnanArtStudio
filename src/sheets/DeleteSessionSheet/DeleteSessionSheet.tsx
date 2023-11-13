import React from 'react';
import ActionSheet, {
  SheetManager,
  SheetProps,
} from 'react-native-actions-sheet';

import {View} from '@wrappers/index';
import {Button} from '@components/index';
import styles from './DeleteSessionSheet.styles';
import {ActionSheetBase} from '@components/index';
import {useDispatch} from 'react-redux';
import {deleteUpcomingSession} from '@store/index';

interface Props extends SheetProps {
  payload: {courseName: string};
}
const DeleteSessionSheet = ({sheetId, payload}: Props) => {
  const dispatch = useDispatch();

  return (
    <ActionSheet id={sheetId} containerStyle={styles.container}>
      <ActionSheetBase
        sheetId={sheetId}
        iconName="warning-24"
        text="Are you sure you want to delete the session booking?"
        actionSheetContent={
          <View style={styles.buttonContainer}>
            <Button
              title="Delete"
              style={styles.button}
              onPress={async () => {
                dispatch(
                  deleteUpcomingSession({
                    reservedCourseName: payload?.courseName,
                  }),
                );
                await SheetManager.hide('DeleteSessionSheet');
              }}
            />
            <Button
              title="Back"
              style={styles.button}
              onPress={async () => {
                await SheetManager.hide('DeleteSessionSheet');
              }}
            />
          </View>
        }
      />
    </ActionSheet>
  );
};

export default DeleteSessionSheet;
