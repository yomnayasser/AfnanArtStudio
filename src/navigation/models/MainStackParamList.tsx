import {courseDetailsTypes} from '@common/types';

type MainStackParamList = {
  Login: undefined;
  LandingPage: undefined;
  StudentsCourse: {
    course: courseDetailsTypes;
  };
  AvailableCourses: undefined;
  BottomTabNavigator: {
    BottomTabNavigator: {
      user: any;
    };
  };
};

export default MainStackParamList;
