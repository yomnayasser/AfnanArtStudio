import React, {useState} from 'react';
import ActionSheet, {SheetProps} from 'react-native-actions-sheet';
import styles from './EnrolledCoursesSortSheet.styles';
import {View} from '@wrappers/index';
import {RadioButton} from '@components/index';
interface Props extends SheetProps {
  payload: {};
}

const EnrolledCoursesSortSheet = ({sheetId}: Props) => {
  const [selectedId, setSelectedId] = useState<string>('');
  return (
    <ActionSheet id={sheetId} containerStyle={styles.container}>
      {courseTime.hours.map(hour => {
        return (
          <View style={styles.radioButtons}>
            <RadioButton
              radioButtonData={[
                {
                  id: `${courseTime?.day} ${hour}`,
                  label: hour,
                  borderColor: theme.radioBorderColor,
                  color: theme.radioBorderColor,
                  labelStyle: {fontSize: theme.fontNormal},
                },
              ]}
              setSelectedId={setSelectedId}
              selectedId={selectedId}
            />
          </View>
        );
      })}
    </ActionSheet>
  );
};

export default EnrolledCoursesSortSheet;
