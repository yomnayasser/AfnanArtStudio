/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {store} from '@store/redux';
import {Provider} from 'react-redux';
import {NavigationContainer} from '@react-navigation/native';
import {GestureHandlerRootView} from 'react-native-gesture-handler';
import {SheetProvider} from 'react-native-actions-sheet';

export default function ProvidersWrapper({children}) {
  return (
    <GestureHandlerRootView style={{flex: 1}}>
      <Provider store={store}>
        <NavigationContainer>
          <SheetProvider>{children}</SheetProvider>
        </NavigationContainer>
      </Provider>
    </GestureHandlerRootView>
  );
}
