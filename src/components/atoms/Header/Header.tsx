import {Pressable, Text, View} from '@wrappers/index';
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
  iconPosition?: 'Left' | 'Right';
};

const Header = ({
  headerText,
  iconName,
  onPressHeader,
  style,
  badge,
  iconPosition = 'Right',
}: Props) => {
  return (
    <View style={style ? style : null}>
      {onPressHeader ? (
        <View style={styles.row}>
          <Pressable style={styles.container} onPress={onPressHeader}>
            {iconName && iconPosition === 'Left' && (
              <Icon
                name={iconName}
                color="@primaryButtonBG"
                size={19}
                style={styles.icon}
              />
            )}
            <Text color={'@primaryButtonBG'} xMediumSize medium>
              {headerText}
            </Text>
            {iconName && iconPosition === 'Right' && (
              <Icon
                name={iconName}
                color="@primaryButtonBG"
                size={19}
                style={styles.icon}
              />
            )}
          </Pressable>
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
