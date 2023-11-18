import {t} from 'i18next';
import React, {useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import ActionSheet, {SheetProps} from 'react-native-actions-sheet';

import {Text} from '@wrappers/index';
import {RootState} from '@store/redux';
import styles from './EnrolledCoursesFilterSheet.styles';
import {EnrolledCoursesFilterFaker} from '@fakers/index';
import {Button, CheckBoxes, FilterSheetHeader} from '@components/index';
import {clearFilter, onPressFilter} from './EnrolledCoursesFilterSheetUtils';

interface Props extends SheetProps {
  payload: {
    setFilterStatus: Function;
    setFilterName: Function;
  };
}

const EnrolledCoursesFilterSheet = ({sheetId, payload}: Props) => {
  const courseStatus = EnrolledCoursesFilterFaker[0].courseStatus;
  const courseName = EnrolledCoursesFilterFaker[0].coursesName;
  const studentDashboard = useSelector(
    (state: RootState) => state.studentDashboardReducer.studentDashboard,
  );

  const [statuesCheckboxes, setStatusCheckboxes] = useState(
    studentDashboard?.courseStatusFilter.length > 0
      ? studentDashboard.courseStatusFilter
      : new Array(courseName?.length).fill(false),
  );
  const [nameCheckboxes, setNameCheckboxes] = useState(
    studentDashboard?.courseNameFilter.length > 0
      ? studentDashboard?.courseNameFilter
      : new Array(courseName?.length).fill(false),
  );
  const dispatch = useDispatch();

  return (
    <ActionSheet id={sheetId} containerStyle={styles.container}>
      <FilterSheetHeader
        sheetName={'EnrolledCoursesFilterSheet'}
        clear={() => {
          clearFilter(
            setNameCheckboxes,
            setStatusCheckboxes,
            dispatch,
            courseName,
            courseStatus,
          );
        }}
      />
      <Text xMediumSize medium>
        {t('course_name')}
      </Text>
      <CheckBoxes
        checkBoxesData={EnrolledCoursesFilterFaker[0].coursesName}
        style={styles.checkboxContainer}
        checkboxes={nameCheckboxes}
        setCheckboxes={setNameCheckboxes}
      />
      <Text xMediumSize medium>
        {t('course_status')}
      </Text>
      <CheckBoxes
        checkBoxesData={EnrolledCoursesFilterFaker[0].courseStatus}
        style={styles.checkboxContainer}
        checkboxes={statuesCheckboxes}
        setCheckboxes={setStatusCheckboxes}
      />
      <Button
        title="Confirm"
        onPress={() => {
          onPressFilter(statuesCheckboxes, nameCheckboxes, payload, dispatch);
        }}
        style={styles.button}
      />
    </ActionSheet>
  );
};

export default EnrolledCoursesFilterSheet;
