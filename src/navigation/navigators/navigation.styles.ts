import {StyleSheet} from 'react-native';
import layouts from '@constants/styles/layouts';
import {px} from '@common/utils';

export default StyleSheet.create({
  container: {
    backgroundColor: 'white',
    ...layouts.row,
    ...layouts.justifyBetween,
    ...layouts.px.xxxl,
    ...layouts.pb.xxl,
    ...layouts.py.xl,
    ...layouts.yCentered,
    ...layouts.shadowProp2,
  },
  icon: {
    textAlign: 'center',
    ...layouts.my.sm,
  },
  bottomTabText: {
    ...layouts.pb.sm,
  },
});
