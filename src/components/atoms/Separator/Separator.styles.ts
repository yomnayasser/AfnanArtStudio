import {StyleSheet} from 'react-native';
import {getCurrentTheme} from 'react-native-theming';

export default StyleSheet.create({
  container: {
    borderWidth: 1,
    borderColor: getCurrentTheme().def.cardBg,
  },
});
