import {t} from 'i18next';
import {ScrollView} from 'react-native';
import React, {useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {getCurrentTheme} from 'react-native-theming';
import ActionSheet, {
  SheetManager,
  SheetProps,
} from 'react-native-actions-sheet';

import {RootState} from '@store/redux';
import {CoursesFaker} from '@fakers/index';
import styles from './BookSessionSheet.styles';
import {Pressable, Text, View} from '@wrappers/index';
import {Button, Icon, RadioButton} from '@components/index';
import {setUpcomingSession, updateUpcomingSession} from '@store/index';

interface Props extends SheetProps {
  payload: {courseName: string};
}

const BookSessionSheet = ({payload, sheetId}: Props) => {
  const theme = getCurrentTheme().def;
  const dispatch = useDispatch();

  const user = useSelector((state: RootState) => state.userReducer.user);
  const reservedCourse = user.reservedCourse.filter(
    course => course.courseName === payload?.courseName,
  );
  const courseData = CoursesFaker.find(
    course => payload?.courseName === course.name,
  );
  const [selectedId, setSelectedId] = useState<string>(
    reservedCourse?.length !== 0
      ? `${reservedCourse[0]?.upcomingSessionDay} ${reservedCourse[0]?.upcomingSessionStartTime} PM - ${reservedCourse[0]?.upcomingSessionEndTime} PM`
      : '',
  );

  const closeSheet = async () => {
    await SheetManager.hide('BookSessionSheet');
  };
  return (
    <ActionSheet id={sheetId} containerStyle={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <Pressable
          onPress={() => {
            closeSheet();
          }}>
          <Icon name="close" style={styles.close} color="@backIcon" />
        </Pressable>
        <Text center semiBold xMediumSize style={styles.headerText}>
          {t('book_your_upcoming_session')} {t('in')} {payload?.courseName}{' '}
          {t('course')}
        </Text>
        <View style={styles.contentContainer}>
          {courseData?.courseTiming?.map(courseTime => {
            return (
              <>
                <Text style={styles.text}>{courseTime?.day}</Text>

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
              </>
            );
          })}
          <Button
            title={t('book')}
            style={styles.button}
            onPress={() => {
              reservedCourse.length !== 0
                ? dispatch(
                    updateUpcomingSession({
                      reservedCourseName: payload?.courseName,
                      reservedSessionTime: selectedId,
                    }),
                  )
                : dispatch(
                    setUpcomingSession({
                      reservedSessionTime: selectedId,
                      reservedCourseName: payload?.courseName,
                    }),
                  );
              closeSheet();
            }}
          />
        </View>
      </ScrollView>
    </ActionSheet>
  );
};

export default BookSessionSheet;
