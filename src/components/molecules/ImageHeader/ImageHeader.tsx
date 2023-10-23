import {Text, View} from '@wrappers/index';
import React from 'react';
import styles from './ImageHeader.styles';
import {ImageSlider} from '@components/atoms';
import {getCurrentTheme} from 'react-native-theming';

type Props = {
  title: string;
  subTitle: string;
  images: string[];
};

const ImageHeader = ({title, subTitle, images}: Props) => {
  const theme = getCurrentTheme().def;
  const {activeDot, inactiveDot} = theme;

  return (
    <View style={styles.header}>
      <ImageSlider
        images={images}
        dotColor={activeDot}
        inactiveDotColor={inactiveDot}
        height={200}
      />
      <View style={styles.titleContainer}>
        <Text xLargeSize medium style={styles.title}>
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
  );
};

export default ImageHeader;
