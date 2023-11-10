import layouts from '@constants/styles/layouts';
import {StyleSheet} from 'react-native';
export default StyleSheet.create({
  container: {
    ...layouts.py.xl,
  },
  headerText: {
    width: 250,
    alignSelf: 'center',
  },
  contentContainer: {
    ...layouts.mx.xxl,
    ...layouts.my.xl,
  },
  edit: {
    ...layouts.row,
  },
  editIcon: {
    width: 50,
    alignItems: 'flex-end',
  },
  close: {
    textAlign: 'right',
    ...layouts.mx.xl,
    ...layouts.mb.xl,
  },
  bookDay: {
    ...layouts.my.xl,
    alignItems: 'center',
  },
  text: {
    ...layouts.my.sm,
  },
  radioButtons: {
    ...layouts.mx.lg,
    ...layouts.my.xs,
  },
  button: {
    width: '80%',
    alignSelf: 'center',
    ...layouts.my.xxl,
  },
});
