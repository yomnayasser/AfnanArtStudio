import React, {useState} from 'react';
import ActionSheet, {
  SheetManager,
  SheetProps,
} from 'react-native-actions-sheet';
import {useDispatch, useSelector} from 'react-redux';

import {RootState} from '@store/redux';
import {updateProfileInfo} from '@store/index';
import {Pressable, Text} from '@wrappers/index';
import styles from './EditPersonalInfoSheet.styles';
import {AvatarImage, Header, ProfilePersonalInfo} from '@components/index';

interface Props extends SheetProps {
  payload: {
    setFilterStatus: Function;
    setFilterName: Function;
  };
}

const EditPersonalInfoSheet = ({sheetId}: Props) => {
  const user = useSelector((state: RootState) => state.userReducer.user);

  const [selectedImage, setSelectedImage] = useState(user.profileImage);
  const [personalInfoData, setPersonalInfoData] = useState({
    Name: user.firstName,
    LastName: user.lastName,
    Username: user.username,
    PhoneNumber: user.phoneNumber,
    EmailAddress: user.emailAddress,
    profileImage: user.profileImage,
  });
  const dispatch = useDispatch();
  return (
    <ActionSheet id={sheetId} containerStyle={styles.container}>
      <AvatarImage
        editMode={true}
        setSelectedImage={setSelectedImage}
        selectedImage={selectedImage}
      />
      <Header
        headerText={'Personal Information'}
        style={styles.header}
        color={'@primaryText'}
      />
      <ProfilePersonalInfo
        editMode={true}
        setPersonalInfoData={setPersonalInfoData}
        personalInfoData={personalInfoData}
      />
      <Pressable
        style={styles.button}
        onPress={() => {
          dispatch(
            updateProfileInfo({
              personalInfoData: personalInfoData,
              profileImage: selectedImage,
            }),
          );
          SheetManager.hide('EditPersonalInfoSheet');
        }}>
        <Text center medium color={'@studentDashboardCardSession'}>
          Save Changes
        </Text>
      </Pressable>
    </ActionSheet>
  );
};

export default EditPersonalInfoSheet;
