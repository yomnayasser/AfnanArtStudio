import {StyleSheet, Platform} from 'react-native';
import {px} from '@common/utils';
import layouts from '@constants/styles/layouts';

export default StyleSheet.create({
  button: {
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    height: px(55),
    width: px(270),
    backgroundColor: '@primaryButtonBG',
  },
  buttonOutlined: {
    borderWidth: 2,
  },

  buttonText: {
    color: '@primaryButtonText',
    fontSize: px(18),
  },
  outlinedButtonText: {
    color: '@outlinedPrimaryButtonText',
    fontSize: px(18),
  },
  danger: {backgroundColor: '@dangerButtonBG'},
  fullWidth: {
    width: '100%',
  },
  halfOpacity: {
    opacity: 0.5,
  },
  titleContainer: {
    ...layouts.row,
    ...layouts.yCentered,
  },
  activityIndicatorStyle: {
    alignSelf: 'center',
  },
});
