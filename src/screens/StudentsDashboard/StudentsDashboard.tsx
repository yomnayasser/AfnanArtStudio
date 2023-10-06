import {View, Text} from 'react-native';
import React from 'react';
import {StudentsDashboardScreenRouteProp} from '@navigation/navigationTypes';

type Props = {
  route: StudentsDashboardScreenRouteProp;
};

const StudentsDashboard = ({route}: Props) => {
  return (
    <View style={{margin: 50}}>
      <Text>Hello, {route?.params?.user.FirstName}</Text>
    </View>
  );
};

export default StudentsDashboard;
