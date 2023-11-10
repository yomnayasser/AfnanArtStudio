import {StyleSheet} from 'react-native';
import {layouts} from '@constants/styles';

export default StyleSheet.create({
  container: {
    ...layouts.xCentered,
    ...layouts.px.xxl,
    ...layouts.py.xl,
    backgroundColor: '@lightPressedButtonBG',
  },
  text: {
    marginTop: '15%',
  },
});
