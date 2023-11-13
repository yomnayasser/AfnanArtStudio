import React from 'react';
import {ScrollView} from 'react-native';

import {IMAGES} from '@constants/assets';
import styles from './HorizontalImageSlider.styles';
import {Image, Pressable, Text} from '@wrappers/index';
import {HorizontalImageSliderTypes} from '@common/types';

type Props = {
  data: HorizontalImageSliderTypes[];
};

const HorizontalImageSlider = ({data}: Props) => {
  return (
    <ScrollView
      horizontal
      style={styles.container}
      showsHorizontalScrollIndicator={false}>
      {data?.map(instructor => {
        return (
          <Pressable>
            <Image source={IMAGES[instructor.image]} style={styles.image} />
            <Text center mediumSize medium style={styles.text}>
              {instructor.name}
            </Text>
          </Pressable>
        );
      })}
    </ScrollView>
  );
};

export default HorizontalImageSlider;
