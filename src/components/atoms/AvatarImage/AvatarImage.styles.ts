import {StyleSheet} from 'react-native';

import {layouts} from '@constants/styles';
import {px} from '@common/utils';

export default StyleSheet.create({
  image: {
    width: 130,
    height: 130,
    borderRadius: 130 / 2,
  },
  icon: {
    position: 'absolute',
    bottom: 0,
    right: 10,
    backgroundColor: '#6cdbd2',
    borderRadius: 15,
    width: 30,
    height: 30,
    overflow: 'hidden',
    textAlign: 'center',
    ...layouts.pt.sm,
    ...layouts.px.sm,
    color: '#141414',
  },
  imageContainer: {
    alignSelf: 'center',
    ...layouts.mb.md,
  },
  editText: {
    ...layouts.mt.xl,
  },
});
