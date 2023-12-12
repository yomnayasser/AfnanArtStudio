import {StyleSheet} from 'react-native';

import {fonts, layouts} from '@constants/styles';
import {px} from '@common/utils';

export default StyleSheet.create({
  container: {
    marginTop: px(80),
    ...layouts.mx.xl,
  },
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
  personalInformation: {
    ...layouts.my.xxl,
  },
  header: {
    ...layouts.my.md,
  },
  row: {
    ...layouts.row,
    ...layouts.my.md,
    // flexWrap: 'wrap',
  },
  subHeader: {
    ...layouts.me.xl,
    width: 130,
  },
  infoText: {
    width: 230,
  },
  separator: {
    borderTopWidth: 1,
    borderTopColor: '#cbe3df',
    ...layouts.mt.md,
  },
  enrolledCourses: {
    backgroundColor: 'white',
    ...layouts.row,
    ...layouts.px.xl,
    ...layouts.py.xl,
    borderTopEndRadius: 10,
    borderTopLeftRadius: 10,
  },
  horizontalSeparator: {
    borderRightWidth: 1,
    borderRightColor: '#95AAC2',
    ...layouts.mx.xl,
  },
  index: {
    ...layouts.selfCenter,
  },
  expireDate: {
    ...layouts.mt.sm,
  },
  input: {
    fontSize: '@fontMedium',
    fontFamily: fonts.poppins,
    borderBottomColor: '#cbe3df',
    borderBottomWidth: 1,
    width: 200,
    ...layouts.pb.md,
  },
});
