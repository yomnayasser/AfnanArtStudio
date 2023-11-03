import {StyleSheet} from 'react-native';
import {getCurrentTheme} from 'react-native-theming';
import {layouts} from '@constants/styles';

const theme = getCurrentTheme().def;
const {primaryBg} = theme;
export default StyleSheet.create({
  container: {
    backgroundColor: primaryBg,
    width: '100%',
    height: 320,
    borderRadius: 20,
    ...layouts.my.xxl,
    ...layouts.px.xl,
    ...layouts.shadowProp,
  },
  innerContainer: {
    ...layouts.allCentered,
    ...layouts.my.md,
  },
  text: {...layouts.mt.lg},
  header: {
    ...layouts.my.xl,
  },
  row: {
    ...layouts.row,
    ...layouts.justifyBetween,
    ...layouts.mt.mlg,
    flexWrap: 'wrap',
  },
  pending: {
    ...layouts.my.sm,
  },
});
