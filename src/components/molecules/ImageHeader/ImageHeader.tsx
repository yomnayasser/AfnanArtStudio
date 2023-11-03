import React, {useEffect, useRef} from 'react';
import {ViewStyle, Animated} from 'react-native';
import {getCurrentTheme} from 'react-native-theming';
import {useNavigation} from '@react-navigation/native';

import styles from './ImageHeader.styles';
import {Pressable, Text, View} from '@wrappers/index';
import {Button, Icon, ImageSlider} from '@components/index';
import {t} from 'i18next';

type Props = {
  title: string;
  subTitle: string;
  images: string[];
  style?: ViewStyle;
};

const ImageHeader = ({title, subTitle, images, style}: Props) => {
  const theme = getCurrentTheme().def;
  const {activeDot, inactiveDot, loaderColor} = theme;
  const navigation = useNavigation();
  const positionY = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    const bounceAnimation = Animated.loop(
      Animated.sequence([
        Animated.timing(positionY, {toValue: -10, duration: 500}),
        Animated.timing(positionY, {toValue: 0, duration: 500}),
      ]),
      {iterations: -1},
    );

    bounceAnimation.start();

    return () => {
      bounceAnimation.stop();
    };
  }, []);
  return (
    <View style={style ? style : {}}>
      <View style={styles.innerContainer}>
        <View style={styles.row}>
          <Pressable
            style={styles.row}
            onPress={() => {
              navigation.goBack();
            }}>
            <Icon name="arrow-left-2" style={styles.icon} size={20} />
            <Text xMediumSize medium style={styles.title}>
              {title}
            </Text>
          </Pressable>
        </View>
        <View style={styles.iconContainer}>
          <Animated.View style={{transform: [{translateY: positionY}]}}>
            <Text style={styles.actionIcons} color={'@primaryText'}>
              {t('enroll')}
            </Text>
          </Animated.View>
          <Icon name="heart" style={styles.actionIcons} size={20} />
          <Icon name="export-1" style={styles.actionIcons} size={20} />
        </View>
      </View>
      <ImageSlider
        images={images}
        dotColor={activeDot}
        inactiveDotColor={inactiveDot}
        imageLoadingColor={loaderColor}
      />
    </View>
  );
};

export default ImageHeader;
