import React from 'react';
import {Linking, ScrollView} from 'react-native';
import {getCurrentTheme} from 'react-native-theming';
import {useNavigation} from '@react-navigation/native';

import {
  Header,
  Map,
  HorizontalImageSlider,
  InnerHeader,
  Svg,
} from '@components/index';
import styles from './AboutUs.styles';
import {InstructorsFaker} from '@fakers/index';
import {Pressable, Text, View} from '@wrappers/index';

const AboutUs = () => {
  const navigation = useNavigation();
  const latitude = 30.062359215871144;
  const longitude = 31.473726196822962;
  const theme = getCurrentTheme().def;
  const openURL = (url: string) => {
    Linking.openURL(url).catch(err => console.error('An error occurred', err));
  };
  const handleOpenMaps = () => {
    const url = `https://www.google.com/maps/search/?api=1&query=${latitude},${longitude}`;

    openURL(url);
  };

  return (
    <>
      <InnerHeader
        header={'About Afnan Art Studio'}
        onPress={() => {
          navigation.goBack();
        }}
      />
      <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
        <Header
          headerText={'Our Instructors'}
          style={styles.header}
          onPressHeader={() => {}}
        />
        <HorizontalImageSlider data={InstructorsFaker} />

        <Header
          headerText={'Our Mission & Vision'}
          style={styles.header}
          onPressHeader={() => {}}
        />
        <Text mediumSize>
          Afnan Art Studio is a vibrant and inclusive art studio dedicated to
          providing art courses and workshops for individuals of all
          ages,regardless of their experience or field of study. Our mission is
          to nurture creativity and inspire artistic expression in both kids and
          adults
        </Text>
        <Header
          headerText={'What We Offer'}
          style={styles.header}
          onPressHeader={() => {}}
        />
        <Text mediumSize>
          We Offer a diverse range of art courses and workshops. such as oil ,
          acrylic painting , portfolio, kids , sketching and portrait courses.
          Whether you're beginner or an experienced artist looking to enhance
          your skills, we have something to offer for you
        </Text>
        <Header
          headerText={'Where To Find Us'}
          style={styles.header}
          onPressHeader={() => {}}
        />
        <Text mediumSize>
          At Afnan Art Studio we believe that art is for everyone, and we are
          committed to fostering a welcoming and inclusive environment, no
          matter your background or experience. We invite you to join or art
          courses and workshops to unlock your creative potential and embark on
          a fulfilling artistic journey
        </Text>
        <Pressable
          style={styles.mapContainer}
          onPress={() => {
            handleOpenMaps();
          }}>
          <Map latitude={latitude} longitude={longitude} />
        </Pressable>
        <Header
          headerText={'Our Socials'}
          style={styles.header}
          onPressHeader={() => {}}
        />
        <View style={styles.socials}>
          <Pressable
            style={styles.svg}
            onPress={() => {
              openURL('https://www.facebook.com/place.of.art.afnan');
            }}>
            <Svg source="facebook" />
          </Pressable>
          <Pressable
            style={styles.svg}
            onPress={() => {
              openURL('https://www.instagram.com/afnanartstudio/');
            }}>
            <Svg source="instagram" />
          </Pressable>
        </View>
      </ScrollView>
    </>
  );
};

export default AboutUs;
