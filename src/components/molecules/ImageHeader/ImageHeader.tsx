import {Image, Text, View} from '@wrappers/index';
import React from 'react';
import styles from './ImageHeader.styles';
import {layouts} from '@constants/styles';

type Props = {
  title: string;
  subTitle: string;
  image: string;
};

const ImageHeader = ({title, subTitle, image}: Props) => {
  return (
    <View style={styles.header}>
      <Image source={image} style={styles.image} />
      <View style={styles.titleContainer}>
        <Text largeSize style={styles.title}>
          {title}
        </Text>
        <Text
          smallSize
          style={styles.subTitle}
          color={'@secondaryPressedButtonBG'}>
          {subTitle}
        </Text>
      </View>
    </View>
  );
};

export default ImageHeader;
