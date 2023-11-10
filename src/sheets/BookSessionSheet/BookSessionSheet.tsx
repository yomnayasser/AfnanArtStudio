import {t} from 'i18next';
import React, {useState} from 'react';
import {ScrollView} from 'react-native';
import {useDispatch} from 'react-redux';
import {getCurrentTheme} from 'react-native-theming';
import ActionSheet, {
  SheetManager,
  SheetProps,
} from 'react-native-actions-sheet';

import {CoursesFaker} from '@fakers/index';
import styles from './BookSessionSheet.styles';
import {setUpcomingSession} from '@store/index';
import {Pressable, Text, View} from '@wrappers/index';
import {Button, Icon, RadioButton} from '@components/index';

interface Props extends SheetProps {
  payload: {courseName: string};
}

const BookSessionSheet = ({payload, sheetId}: Props) => {
  const theme = getCurrentTheme().def;
  const dispatch = useDispatch();

  const [selectedId, setSelectedId] = useState<string>('');
  const courseTiming = CoursesFaker.find(
    course => payload?.courseName === course.name,
  )?.courseTiming;

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
          {courseTiming?.map(courseTime => {
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
              dispatch(
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
