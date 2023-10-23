import React from 'react';
import {ViewStyle} from 'react-native';
import {SliderBox} from 'react-native-image-slider-box';

type Props = {
  images: string[];
  height?: number;
  dotColor?: string;
  inactiveDotColor?: string;
  dotStyle?: ViewStyle;
  imageLoadingColor?: string;
  ImageComponentStyle?: ViewStyle;
};

const ImageSlider = ({
  images,
  height,
  dotColor,
  inactiveDotColor,
  dotStyle,
  ImageComponentStyle,
  imageLoadingColor,
}: Props) => {
  return (
    <SliderBox
      images={images}
      sliderBoxHeight={height}
      dotColor={dotColor}
      inactiveDotColor={inactiveDotColor}
      dotStyle={dotStyle}
      ImageComponentStyle={ImageComponentStyle}
      imageLoadingColor={imageLoadingColor}
    />
  );
};

export default ImageSlider;
