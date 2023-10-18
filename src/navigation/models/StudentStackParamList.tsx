import {courseDetailsTypes} from '@common/types';

type StudentStackParamList = {
  StudentsDashboard: {
    user: {
      username: string;
      password: string;
      FirstName: string;
      LastName: string;
      Age: number;
    };
  };
  StudentProfile: undefined;
  AvailableCourses: undefined;
  CourseDetails: {
    course: courseDetailsTypes;
  };
};

export default StudentStackParamList;
