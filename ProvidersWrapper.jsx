/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {store} from '@store/redux';
import {Provider} from 'react-redux';
import {NavigationContainer} from '@react-navigation/native';
import {BottomSheetModalProvider} from '@gorhom/bottom-sheet';
import {GestureHandlerRootView} from 'react-native-gesture-handler';

export default function ProvidersWrapper({children}) {
  return (
    <GestureHandlerRootView style={{flex: 1}}>
      <Provider store={store}>
        <NavigationContainer>
          <BottomSheetModalProvider>{children}</BottomSheetModalProvider>
        </NavigationContainer>
      </Provider>
    </GestureHandlerRootView>
  );
}
