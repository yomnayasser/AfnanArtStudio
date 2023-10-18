import {View, Text} from 'react-native';
import React from 'react';
import {Button} from '@components/atoms';
import {useNavigation} from '@react-navigation/native';

type Props = {};

const AvailableCourses = (props: Props) => {
  const navigation = useNavigation();
  return (
    <View>
      <Text>AvailableCourses</Text>
      <Button
        title="back"
        onPress={() => {
          navigation.goBack();
        }}
      />
    </View>
  );
};

export default AvailableCourses;
