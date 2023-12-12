import {t} from 'i18next';
import React from 'react';
import {useSelector} from 'react-redux';
import {GestureResponderEvent} from 'react-native';

import Icon from '../Icon/Icon';
import {RootState} from '@store/redux';
import {IMAGES} from '@constants/assets';
import styles from './AvatarImage.styles';
import {openImagePicker} from './AvatarImageUtils';
import {Image, Pressable, Text, View} from '@wrappers/index';

type Props = {
  onPress?: (event: GestureResponderEvent) => void;
  editMode: boolean;
  setSelectedImage?: Function;
  selectedImage?: string;
};

const AvatarImage = ({
  onPress,
  editMode,
  setSelectedImage,
  selectedImage,
}: Props) => {
  const user = useSelector((state: RootState) => state.userReducer.user);

  return (
    <View style={styles.imageContainer}>
      <Image
        source={
          selectedImage
            ? {uri: selectedImage}
            : user?.profileImage
            ? {uri: user?.profileImage}
            : IMAGES.avatar
        }
        style={styles.image}
      />
      {editMode && (
        <>
          {selectedImage && (
            <Pressable
              onPress={() => {
                setSelectedImage && setSelectedImage('');
              }}>
              <Icon
                name="close"
                size={18}
                style={[styles.icon, styles.deleteIcon]}
              />
            </Pressable>
          )}
          <Pressable
            onPress={() => {
              setSelectedImage && openImagePicker(setSelectedImage);
            }}>
            <Text center color={'@primaryText'} style={styles.editText}>
              {t('edit_picture')}
            </Text>
          </Pressable>
        </>
      )}

      {!editMode && (
        <Pressable onPress={onPress}>
          <Icon name="edit-2" size={18} style={styles.icon} />
        </Pressable>
      )}
    </View>
  );
};

export default AvatarImage;
