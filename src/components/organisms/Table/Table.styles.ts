import {StyleSheet} from 'react-native';

import {fonts, layouts} from '@constants/styles';
import {getCurrentTheme} from 'react-native-theming';

export default StyleSheet.create({
  table: {...layouts.mt.xl, ...layouts.mb.sm},
  tableContainer: {
    borderWidth: 1,
    borderColor: getCurrentTheme().def.tableBorderColor,
  },
  note: {...layouts.my.sm},
  head: {
    backgroundColor: getCurrentTheme().def.tableBG,
    height: 50,
  },
  wrapper: {
    ...layouts.row,
  },
  row: {height: 50},
  text: {textAlign: 'center', fontFamily: fonts.poppinsMedium},
});
