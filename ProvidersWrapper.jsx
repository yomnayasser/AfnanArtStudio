import React from 'react';
import {NavigationContainer} from '@react-navigation/native';

export default function ProvidersWrapper({children}) {
  return (
    <>
      <NavigationContainer>{children}</NavigationContainer>
    </>
  );
}
