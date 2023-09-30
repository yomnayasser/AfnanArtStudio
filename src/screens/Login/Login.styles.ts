import layouts from '@constants/styles/layouts';
import {Dimensions, Platform, StyleSheet} from 'react-native';
const WINDOW_WIDTH = Dimensions.get('window').width;
const WINDOW_HEIGHT = Dimensions.get('window').height;

export default StyleSheet.create({
  container: {
    // ...layouts.allCentered,
    ...layouts.flexed,
    backgroundColor: '@background',
    paddingTop: Platform.OS === 'ios' ? '50%' : '20%',
    ...layouts.px.xl,
  },
  buttonContainer: {
    ...layouts.my.xxxl,
  },
  animation1: {
    position: 'absolute',
    height: 280,
    right: -25,
    bottom: 0,
  },
});
