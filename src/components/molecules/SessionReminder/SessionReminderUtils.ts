import {reservedCourse} from '@common/types';
import {getNextDayDate} from '@common/utils';
import {t} from 'i18next';

export const getText = (session: reservedCourse) => {
  return `${t('upcoming_session')} Will be ${t('on')} ${
    session.upcomingSessionDay
  } ${getNextDayDate(session.upcomingSessionDay)} ${t('from')} ${
    session.upcomingSessionStartTime
  } ${t('pm')} ${t('to')} ${session.upcomingSessionEndTime} ${t('pm')}`;
};
