import React, {useCallback, useMemo} from 'react';
import BottomSheet from '@gorhom/bottom-sheet';
import {BottomSheetMethods} from '@gorhom/bottom-sheet/lib/typescript/types';

import styles from './LoginSheet.styles';
import {Text, View} from '@wrappers/index';

type Props = {
  bottomSheetRef: React.RefObject<BottomSheetMethods>;
  bottomSheetIndex: number;
};

const LoginSheet = ({bottomSheetRef, bottomSheetIndex}: Props) => {
  // variables
  const snapPoints = useMemo(() => ['25%', '100%'], []);

  // callbacks
  const handleSheetChanges = useCallback((index: number) => {}, []);

  return (
    <View style={styles.container}>
      <BottomSheet
        ref={bottomSheetRef}
        index={bottomSheetIndex}
        snapPoints={snapPoints}
        enablePanDownToClose
        onChange={handleSheetChanges}>
        <View style={styles.contentContainer}>
          <Text>Awesome 🎉</Text>
        </View>
      </BottomSheet>
    </View>
  );
};

export default LoginSheet;
