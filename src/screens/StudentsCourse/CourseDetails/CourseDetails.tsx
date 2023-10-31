/* eslint-disable react-hooks/exhaustive-deps */
import {t} from 'i18next';
import React, {useContext, useEffect, useState} from 'react';

import {IMAGES} from '@constants/assets';
import {View} from '@wrappers/index';
import styles from './CourseDetails.styles';
import {CourseDetailsTabView, ImageHeader} from '@components/index';
import {StudentCourseContext} from '@store/index';

const CourseDetails = () => {
  const {Value, incrementStep} = useContext(StudentCourseContext);
  const [sliderImages, setSliderImages] = useState<string[]>([]);

  useEffect(() => {
    let temp: string[] = [];
    Value?.course?.sliderImages?.map((image: string) => {
      temp.push(IMAGES[image]);
    });
    setSliderImages(temp);
  }, [Value]);

  return (
    <View style={styles.container}>
      {sliderImages.length > 0 && (
        <ImageHeader
          title={Value?.course?.name + ' ' + t('course')}
          subTitle={Value?.course?.experience}
          images={sliderImages}
          style={styles.headerContainer}
        />
      )}
      <CourseDetailsTabView
        course={Value?.course}
        incrementStep={incrementStep}
        feedbacks={Value?.course?.feedbacks}
      />
    </View>
  );
};

export default CourseDetails;
