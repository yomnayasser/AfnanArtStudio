import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {BottomSheetModalProvider} from '@gorhom/bottom-sheet';
import {GestureHandlerRootView} from 'react-native-gesture-handler';

export default function ProvidersWrapper({children}) {
  return (
    <GestureHandlerRootView style={{flex: 1}}>
      <NavigationContainer>
        <BottomSheetModalProvider>{children}</BottomSheetModalProvider>
      </NavigationContainer>
    </GestureHandlerRootView>
  );
}
