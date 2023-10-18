type MainStackParamList = {
  LandingPage: undefined;
  Login: undefined;
  StudentNavigator: {
    StudentStack: {
      user: {
        username: string;
        password: string;
        FirstName: string;
        LastName: string;
        Age: number;
      };
    };
  };
};

export default MainStackParamList;
