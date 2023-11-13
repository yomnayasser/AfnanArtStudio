import {StyleSheet} from 'react-native';

import {layouts} from '@constants/styles';

export default StyleSheet.create({
  container: {
    ...layouts.allCentered,
    ...layouts.pt.sm,
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
