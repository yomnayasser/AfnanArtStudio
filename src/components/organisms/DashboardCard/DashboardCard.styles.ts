import {StyleSheet} from 'react-native';
import {getCurrentTheme} from 'react-native-theming';
import {layouts} from '@constants/styles';

const theme = getCurrentTheme().def;
const {primaryBg} = theme;
export default StyleSheet.create({
  container: {
    backgroundColor: primaryBg,
    width: '100%',
    height: 300,
    borderRadius: 20,
    ...layouts.mb.xxxl,
    ...layouts.mt.xl,
    ...layouts.px.xl,
    ...layouts.shadowProp,
  },
  innerContainer: {
    ...layouts.allCentered,
  },
  text: {...layouts.mt.lg},
  header: {
    ...layouts.my.xl,
  },
  row: {
    ...layouts.row,
    ...layouts.justifyBetween,
    ...layouts.mt.md,
  },
  pending: {
    ...layouts.py.sm,
  },
  dashboardText: {
    width: 200,
    backgroundColor: 'red',
  },
});
