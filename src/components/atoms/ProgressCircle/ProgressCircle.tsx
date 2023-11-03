import {fonts} from '@constants/styles';
import {View} from '@wrappers/index';
import React from 'react';
import {ViewStyle} from 'react-native';
import CircularProgress from 'react-native-circular-progress-indicator';
import {getCurrentTheme} from 'react-native-theming';

type Props = {
  value: number;
  total: number;
  size: number;
  title: string;
  style?: ViewStyle;
};

const ProgressCircle = ({value, total, size, title, style}: Props) => {
  const theme = getCurrentTheme().def;
  const {progressCircle} = theme;
  return (
    <View style={style ? style : {}}>
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
    </View>
  );
};

export default ProgressCircle;
