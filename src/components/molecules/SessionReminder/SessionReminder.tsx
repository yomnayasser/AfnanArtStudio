import React from 'react';
import {useSelector} from 'react-redux';
import {SheetManager} from 'react-native-actions-sheet';

import {Icon} from '@components/index';
import {RootState} from '@store/redux';
import styles from './SessionReminder.styles';
import {getText} from './SessionReminderUtils';
import {Pressable, Text, View} from '@wrappers/index';

const SessionReminder = () => {
  const user = useSelector((state: RootState) => state.userReducer.user);

  return (
    <>
      {user?.reservedCourse?.length > 0 &&
        user?.reservedCourse?.map(session => {
          return (
            <View style={styles.row}>
              <Text
                semiBold
                smallSize
                color={'@studentDashboardCardSession'}
                style={styles.upcomingSession}>
                {getText(session)}
              </Text>
              <View style={styles.sessionBooking}>
                <Pressable
                  onPress={async () => {
                    SheetManager.show('BookSessionSheet', {
                      payload: {
                        courseName: session.courseName,
                        courseId: session.courseId,
                      },
                    });
                  }}>
                  <Icon
                    name="edit-2"
                    size={17}
                    style={styles.editIcon}
                    color="@studentDashboardCardSession"
                  />
                </Pressable>
                <Pressable
                  onPress={() => {
                    SheetManager.show('DeleteSessionSheet', {
                      payload: {
                        courseName: session.courseName,
                      },
                    });
                  }}>
                  <Icon
                    name="close"
                    size={17}
                    style={styles.editIcon}
                    color="@studentDashboardCardSession"
                  />
                </Pressable>
              </View>
            </View>
          );
        })}
    </>
  );
};

export default SessionReminder;
