import {courseDetailsTypes} from '@common/types';

type MainStackParamList = {
  Login: undefined;
  LandingPage: undefined;
  StudentsCourse: {
    course: courseDetailsTypes;
  };
  AvailableCourses: undefined;
  BottomTabNavigator: undefined;
  AboutUs: undefined;
};

export default MainStackParamList;
