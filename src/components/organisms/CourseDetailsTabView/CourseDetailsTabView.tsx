/* eslint-disable react/no-unstable-nested-components */
import {t} from 'i18next';
import * as React from 'react';
import {ScrollView, View} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {TabView, SceneMap, TabBar} from 'react-native-tab-view';

import {Text} from '@wrappers/index';
import {courseDetailsTypes} from '@common/types';
import styles from './CourseDetailsTabView.styles';
import {Button, Header, List, Table} from '@components/index';
import {EnrollCourseScreen} from '@navigation/navigationTypes';

type Props = {
  course: courseDetailsTypes;
};
type FirstRouteProp = {
  course: courseDetailsTypes;
  navigation: EnrollCourseScreen;
};

const FirstRoute = ({course, navigation}: FirstRouteProp) => (
  <ScrollView style={styles.container}>
    <Header headerText={t('what_to_expect')} style={styles.title} />
    <List number listData={course?.outcomes} />
    <Header headerText=" Course Packages:" style={styles.title} />
    <Table
      tableData={course?.packagesPrices}
      tableHead={course?.packagesName}
    />
    <Text mediumSize style={styles.note}>
      {course?.sessionDuration + ' ' + t('hours_per_session')}
    </Text>
    {course?.notes?.length > 0 && (
      <>
        <Text style={styles.subHeader}>{t('notes')}</Text>
        <List listData={course?.notes} />
      </>
    )}
    <Button
      style={styles.button}
      title={t('enroll')}
      onPress={() => {
        navigation.navigate('EnrollCourse', {course: course});
      }}
    />
  </ScrollView>
);

const SecondRoute = () => (
  <View style={{flex: 1, backgroundColor: '#673ab7'}} />
);

const CourseDetailsTabView = ({course}: Props) => {
  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    {key: 'first', title: 'Overview'},
    {key: 'second', title: 'Feedback'},
  ]);
  const navigation = useNavigation<EnrollCourseScreen>();
  const renderScene = SceneMap({
    first: () => <FirstRoute course={course} navigation={navigation} />,
    second: SecondRoute,
  });

  return (
    <TabView
      renderTabBar={props => (
        <TabBar
          {...props}
          renderLabel={({route}) => {
            return (
              <Text medium xMediumSize>
                {route.title}
              </Text>
            );
          }}
          indicatorStyle={styles.indicatorStyle}
          style={styles.tabBar}
        />
      )}
      navigationState={{index, routes}}
      renderScene={renderScene}
      onIndexChange={setIndex}
    />
  );
};
export default CourseDetailsTabView;
