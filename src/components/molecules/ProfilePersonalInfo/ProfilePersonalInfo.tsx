import React from 'react';
import {t} from 'i18next';
import {ViewStyle} from 'react-native';
import {useSelector} from 'react-redux';

import {View} from '@wrappers/index';
import {RootState} from '@store/redux';
import {InfoText} from '@components/index';

type Props = {
  editMode: boolean;
  styles?: ViewStyle;
  setPersonalInfoData?: Function;
  personalInfoData?: any;
};

const ProfilePersonalInfo = ({
  editMode,
  styles,
  setPersonalInfoData,
  personalInfoData,
}: Props) => {
  const user = useSelector((state: RootState) => state.userReducer.user);

  return (
    <View style={styles ? styles : {}}>
      <InfoText
        header={t('name')}
        text={user.firstName}
        switchToInput={editMode}
        setValue={setPersonalInfoData}
        valueData={personalInfoData}
      />
      <InfoText
        header={t('lastName')}
        text={user.lastName}
        switchToInput={editMode}
        setValue={setPersonalInfoData}
        valueData={personalInfoData}
      />
      <InfoText
        header={t('username')}
        text={user.username}
        switchToInput={editMode}
        setValue={setPersonalInfoData}
        valueData={personalInfoData}
      />
      <InfoText
        header={t('phone_number')}
        text={user.phoneNumber?.toString()}
        switchToInput={editMode}
        setValue={setPersonalInfoData}
        valueData={personalInfoData}
      />
      <InfoText
        header={t('email_address')}
        text={user.emailAddress}
        switchToInput={editMode}
        setValue={setPersonalInfoData}
        valueData={personalInfoData}
      />
    </View>
  );
};

export default ProfilePersonalInfo;
