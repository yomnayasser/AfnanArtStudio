import {Dimensions} from 'react-native';
const {width: SCREEN_WIDTH, height} = Dimensions.get('window');
const aspectRatio = height / SCREEN_WIDTH;
const isTablet = aspectRatio < 1.6; // Assumes 4:3 aspect ratio for tablets

// Normalize Fun
const scale = isTablet ? SCREEN_WIDTH / 600 : SCREEN_WIDTH / 375; // 375 is width of mobile screen in ui and 600 in case of tablet device  ;
const px = (size: number) => {
  const newSize = size * scale;

  return newSize;
};

export default px;
// we can use it like -->  fontSize : px(26) | marginTop : px(10)
// Responsive ui can be implemented by using normalize function.
