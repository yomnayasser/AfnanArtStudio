import {Text, View} from '@wrappers/index';
import React from 'react';
import {Switch as SwitchRN} from 'react-native-switch';
import styles from './Switch.styles';
import {getCurrentTheme} from 'react-native-theming';

type Props = {
  switchValue: boolean;
  setSwitchValue: Function;
  switchText: string;
};

const Switch = ({switchValue = false, setSwitchValue, switchText}: Props) => {
  const theme = getCurrentTheme().def;
  const {switchOn, switchOnBg, switchOff, switchOffBg} = theme;

  return (
    <View style={styles.switchContainer}>
      <View style={styles.switch}>
        <SwitchRN
          value={switchValue}
          onValueChange={val => setSwitchValue(val)}
          disabled={false}
          activeText={'On'}
          inActiveText={'Off'}
          circleSize={20}
          barHeight={20}
          circleBorderWidth={1}
          circleBorderActiveColor={switchOn}
          circleBorderInactiveColor={switchOff}
          backgroundActive={switchOnBg}
          backgroundInactive={switchOffBg}
          circleActiveColor={switchOn}
          circleInActiveColor={switchOff}
          changeValueImmediately={true}
          innerCircleStyle={styles.innerCircleStyle}
          outerCircleStyle={{}} // style for outer animated circle
          renderActiveText={false}
          renderInActiveText={false}
        />
      </View>
      <Text mediumSize style={styles.switchText}>
        {switchText}
      </Text>
    </View>
  );
};

export default Switch;
