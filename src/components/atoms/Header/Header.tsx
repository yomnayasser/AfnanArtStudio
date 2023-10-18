import {Text, TouchableOpacity, View} from '@wrappers/index';
import React from 'react';
import styles from './Header.styles';
import Icon from '../Icon/Icon';
import {GestureResponderEvent, ViewStyle} from 'react-native';

type Props = {
  headerText: string;
  iconName?: string;
  onPressHeader?: (event: GestureResponderEvent) => void;
  style?: ViewStyle;
};

const Header = ({headerText, iconName, onPressHeader, style}: Props) => {
  return (
    <View style={style ? style : null}>
      {onPressHeader ? (
        <>
          <TouchableOpacity style={styles.container} onPress={onPressHeader}>
            <Text color={'@primaryButtonBG'} xMediumSize medium>
              {headerText}
            </Text>
            {iconName && (
              <Icon
                name={iconName}
                color="@backIcon"
                size={19}
                style={styles.icon}
              />
            )}
          </TouchableOpacity>
        </>
      ) : (
        <Text xMediumSize medium>
          {headerText}
        </Text>
      )}
    </View>
  );
};

export default Header;
