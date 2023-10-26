import React from 'react';
import {ViewStyle} from 'react-native';
import {getCurrentTheme} from 'react-native-theming';
import {useNavigation} from '@react-navigation/native';

import styles from './ImageHeader.styles';
import {Pressable, Text, View} from '@wrappers/index';
import {Icon, ImageSlider} from '@components/index';

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

  return (
    <View style={style ? style : {}}>
      <ImageSlider
        images={images}
        dotColor={activeDot}
        inactiveDotColor={inactiveDot}
        imageLoadingColor={loaderColor}
      />
      <View style={styles.titleContainer}>
        <Pressable
          onPress={() => {
            navigation.goBack();
          }}>
          <Icon name="arrow-left-2" style={styles.icon} />
        </Pressable>
        <View>
          <Text xLargeSize medium style={styles.title} color={'@darkText'}>
            {title}
          </Text>
          <Text
            smallSize
            medium
            style={styles.subTitle}
            color={'@secondaryPressedButtonBG'}>
            {subTitle}
          </Text>
        </View>
      </View>
    </View>
  );
};

export default ImageHeader;
