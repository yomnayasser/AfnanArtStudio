import layouts from '@constants/styles/layouts';
import {StyleSheet} from 'react-native';
export default StyleSheet.create({
  container: {
    height: '40%',
  },
  buttonContainer: {
    ...layouts.row,
    ...layouts.allCentered,
  },
  button: {
    width: '45%',
    ...layouts.mx.md,
    ...layouts.mt.md,
  },
});
