type MainStackParamList = {
  LandingPage: undefined;
  Login: undefined;
  StudentsDashboard: {
    user: {
      username: string;
      password: string;
      FirstName: string;
      LastName: string;
      Age: number;
    };
  };
};

export default MainStackParamList;
