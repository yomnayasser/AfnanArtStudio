import {StyleSheet} from 'react-native';

import {layouts} from '@constants/styles';

export default StyleSheet.create({
  separator: {
    borderTopWidth: 1,
    borderTopColor: '@horizontalSeparator',
    ...layouts.my.xl,
  },
});
