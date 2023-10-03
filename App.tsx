import {LogBox} from 'react-native';
import React, {useEffect} from 'react';

import '@common/locales';
import themes from '@constants/themes';
import {Navigators} from '@navigation/index';
import ProvidersWrapper from './ProvidersWrapper';

LogBox.ignoreLogs(['Warning: ...']);
LogBox.ignoreAllLogs();

const App = () => {
  const getTheme = async () => {
    themes.map(theme => {
      if (theme.name === 'Light') {
        theme.apply();
      }
    });
  };
  useEffect(() => {
    getTheme();
  }, []);
  return (
    <>
      <Navigators />
    </>
  );
};

const AppWithProvider = () => {
  return (
    <ProvidersWrapper>
      <App />
    </ProvidersWrapper>
  );
};

export default AppWithProvider;
