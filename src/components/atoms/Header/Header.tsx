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
  badge?: number;
};

const Header = ({headerText, iconName, onPressHeader, style, badge}: Props) => {
  return (
    <View style={style ? style : null}>
      {onPressHeader ? (
        <View style={styles.row}>
          <TouchableOpacity style={styles.container} onPress={onPressHeader}>
            <Text color={'@primaryButtonBG'} xMediumSize medium>
              {headerText}
            </Text>
            {iconName && (
              <Icon
                name={iconName}
                color="@primaryButtonBG"
                size={19}
                style={styles.icon}
              />
            )}
          </TouchableOpacity>
          {badge && badge > 1 && (
            <View style={styles.badge}>
              <Text center style={styles.badgeText}>
                {badge}
              </Text>
            </View>
          )}
        </View>
      ) : (
        <Text medium>{headerText}</Text>
      )}
    </View>
  );
};

export default Header;
