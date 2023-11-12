import {StyleSheet} from 'react-native';

import {layouts} from '@constants/styles';

export default StyleSheet.create({
  container: {
    backgroundColor: 'white',
    borderWidth: 1,
    borderColor: 'white',
    ...layouts.allCentered,
    ...layouts.pt.sm,
    borderBottomRightRadius: 5,
    borderBottomLeftRadius: 5,
  },
  innerContainer: {
    backgroundColor: 'white',
    borderWidth: 1,
    borderColor: 'white',
  },
  text: {
    ...layouts.py.xl,
    ...layouts.px.md,
  },
});
