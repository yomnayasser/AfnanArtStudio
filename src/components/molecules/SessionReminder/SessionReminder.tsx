import {t} from 'i18next';
import React from 'react';
import {useSelector} from 'react-redux';
import {SheetManager} from 'react-native-actions-sheet';

import {Icon} from '@components/index';
import {RootState} from '@store/redux';
import {getNextDayDate} from '@common/utils';
import styles from './SessionReminder.styles';
import {Pressable, Text, View} from '@wrappers/index';

const SessionReminder = () => {
  const user = useSelector((state: RootState) => state.userReducer.user);

  return (
    <>
      {user?.reservedCourse?.length > 0 &&
        user?.reservedCourse?.map(session => {
          return (
            <>
              <View style={styles.row}>
                <Text
                  semiBold
                  smallSize
                  color={'@errorText'}
                  style={styles.upcomingSession}>
                  {t('upcoming_session')} {t('in')} {session.courseName}{' '}
                  {t('course')} {t('on')} {''}
                  {session.upcomingSessionDay}{' '}
                  {getNextDayDate(session.upcomingSessionDay)} {t('from')}{' '}
                  {session.upcomingSessionStartTime} {t('pm')} {t('to')}{' '}
                  {session.upcomingSessionEndTime} {t('pm')}
                </Text>
                <View style={styles.row}>
                  <Pressable
                    onPress={async () => {
                      SheetManager.show('BookSessionSheet', {
                        payload: {
                          courseName: session.courseName,
                        },
                      });
                    }}>
                    <Icon
                      name="edit-2"
                      size={17}
                      style={styles.editIcon}
                      color="@errorText"
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
                      color="@errorText"
                    />
                  </Pressable>
                </View>
              </View>
            </>
          );
        })}
    </>
  );
};

export default SessionReminder;
