import {ViewStyle} from 'react-native';
import React, {useEffect, useState} from 'react';
import Carousel from 'react-native-snap-carousel';

import {IMAGES} from '@constants/assets';
import styles from './ImageCarousel.styles';
import {imageCarousel} from '@common/types';
import {Image, Text, View} from '@wrappers/index';

type Props = {
  data: imageCarousel[];
  style?: ViewStyle;
};

const ImageCarousel = ({data, style}: Props) => {
  const [carouselData, setCarouselData] = useState<imageCarousel[]>([]);
  useEffect(() => {
    const temp: imageCarousel[] = [];
    data.map(carousel => {
      temp.push({
        id: carousel.id,
        title: carousel.title,
        image: IMAGES[carousel.image],
      });
    });
    setCarouselData(temp);
  }, [data]);

  return (
    <View style={[styles.container, style ? style : {}]}>
      <Carousel
        loop={true}
        autoplay={true}
        autoplayInterval={2000}
        lockScrollWhileSnapping
        layout={'stack'}
        data={carouselData}
        renderItem={({item}) => (
          <View>
            <Image source={item.image} />
            <View style={styles.innerContainer}>
              <Text color={'@primaryText'} center style={styles.text}>
                {item.title}
              </Text>
            </View>
          </View>
        )}
        sliderWidth={350}
        itemWidth={350}
      />
    </View>
  );
};

export default ImageCarousel;
