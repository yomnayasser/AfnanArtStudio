import {t} from 'i18next';
import React, {useEffect, useState} from 'react';
import {ScrollView} from 'react-native';
import {useNavigation} from '@react-navigation/native';

import {IMAGES} from '@constants/assets';
import {Text, View} from '@wrappers/index';
import styles from './CourseDetails.styles';
import {
  CourseDetailsScreenRouteProp,
  EnrollCourseScreen,
} from '@navigation/navigationTypes';
import {
  Button,
  Header,
  ImageHeader,
  List,
  TabView,
  Table,
} from '@components/index';
import {SliderBox} from 'react-native-image-slider-box';
import TabViewExample from '@components/organisms/TabView/TabView';

type Props = {
  route: CourseDetailsScreenRouteProp;
};

const CourseDetails = ({route}: Props) => {
  const course = route?.params?.course;
  const imagePath = course?.image;
  const navigation = useNavigation<EnrollCourseScreen>();
  const [sliderImages, setSliderImages] = useState<string[]>([]);

  useEffect(() => {
    let temp: string[] = [];
    course?.sliderImages?.map(image => {
      temp.push(IMAGES[image]);
    });
    setSliderImages(temp);
  }, []);

  return (
    // <ScrollView>
    <View style={{flex: 1}}>
      <ImageHeader
        title={course.name + ' ' + t('course')}
        subTitle={course.experience}
        images={sliderImages}
      />
      <TabViewExample />

      {/* <TabView /> */}
    </View>
    // </ScrollView>
  );
};

export default CourseDetails;
// <View style={styles.container}>
//   <Header headerText={t('what_to_expect')} style={styles.title} />

//   <List number listData={course.outcomes} />

//   <Header headerText=" Course Packages:" style={styles.title} />
//   <Table
//     tableData={course.packagesPrices}
//     tableHead={course.packagesName}
//   />

//   <Text mediumSize style={styles.note}>
//     {course.sessionDuration + ' ' + t('hours_per_session')}
//   </Text>

//   {course.notes.length > 0 && (
//     <>
//       <Text style={styles.subHeader}>{t('notes')}</Text>
//       <List listData={course.notes} />
//     </>
//   )}
//   <View style={styles.buttonContainer}>
//     <Button
//       style={styles.button}
//       title={t('back')}
//       onPress={() => {
//         navigation.goBack();
//       }}
//     />
//     <Button
//       style={styles.button}
//       title={t('enroll')}
//       onPress={() => {
//         navigation.navigate('EnrollCourse', {course: course});
//       }}
//     />
//   </View>
// </View>;
