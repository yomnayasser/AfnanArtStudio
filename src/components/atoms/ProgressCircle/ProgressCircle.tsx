import {fonts} from '@constants/styles';
import React from 'react';
import CircularProgress from 'react-native-circular-progress-indicator';
import {getCurrentTheme} from 'react-native-theming';

type Props = {
  value: number;
  total: number;
  size: number;
  title: string;
};

const ProgressCircle = ({value, total, size, title}: Props) => {
  const theme = getCurrentTheme().def;
  const {progressCircle} = theme;
  return (
    <CircularProgress
      value={value}
      radius={size}
      duration={2000}
      progressValueColor={progressCircle}
      maxValue={total}
      title={title}
      titleColor={progressCircle}
      titleStyle={fonts.poppinsBold}
      activeStrokeColor={progressCircle}
    />
  );
};

export default ProgressCircle;
