import {View, Text} from 'react-native';
import React from 'react';
import {layouts} from '@constants/styles';
import {Button} from '@components/atoms';
import {useNavigation} from '@react-navigation/native';

type Props = {};

const StudentProfile = (props: Props) => {
  const navigation = useNavigation();
  return (
    <View style={{margin: 70}}>
      <Text>StudentProfile</Text>
      <Button
        title="back"
        onPress={() => {
          navigation.goBack();
        }}
      />
    </View>
  );
};

export default StudentProfile;
