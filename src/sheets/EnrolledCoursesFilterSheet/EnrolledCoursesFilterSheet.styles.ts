import {fontSizes, fonts} from '@constants/styles';
import layouts from '@constants/styles/layouts';
import {StyleSheet} from 'react-native';
export default StyleSheet.create({
  container: {
    height: '68%',
    ...layouts.px.xl,
  },
  checkboxText: {
    fontFamily: fonts.poppins,
    fontSize: fontSizes.fontNormal,
  },
  checkboxContainer: {
    ...layouts.my.md,
  },
  button: {
    ...layouts.my.xl,
    width: '80%',
    alignSelf: 'center',
  },
});
