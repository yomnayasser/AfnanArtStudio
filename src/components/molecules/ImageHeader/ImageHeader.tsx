import React from 'react';
import {ViewStyle} from 'react-native';
import {getCurrentTheme} from 'react-native-theming';
import {useNavigation} from '@react-navigation/native';

import styles from './ImageHeader.styles';
import {Pressable, Text, View} from '@wrappers/index';
import {Button, Icon, ImageSlider} from '@components/index';

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
      <View style={styles.innerContainer}>
        <View style={styles.row}>
          <Pressable
            style={styles.row}
            onPress={() => {
              navigation.goBack();
            }}>
            <Icon
              name="arrow-left-2"
              style={styles.icon}
              size={22}
              color="@primaryText"
            />
            <Text largeSize medium style={styles.title} color={'@primaryText'}>
              {title}
            </Text>
          </Pressable>
        </View>
        <View style={styles.iconContainer}>
          <Icon name="heart" style={styles.actionIcons} />
          <Icon name="export-1" style={styles.actionIcons} />
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
{
  /* <View style={styles.iconContainer}>
          <Icon name="heart" style={styles.actionIcons} />
          <Icon name="export-1" style={styles.actionIcons} />
        </View> */
}
