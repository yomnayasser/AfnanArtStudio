/* eslint-disable react/no-unstable-nested-components */
import {t} from 'i18next';
import * as React from 'react';
import {ScrollView, View} from 'react-native';
import {TabView, SceneMap, TabBar} from 'react-native-tab-view';

import {Text} from '@wrappers/index';
import styles from './CourseDetailsTabView.styles';
import {courseDetailsTypes, feedbackTypes} from '@common/types';
import {
  Button,
  FeedbackCard,
  Header,
  List,
  Separator,
  Table,
} from '@components/index';

type Props = {
  course: courseDetailsTypes;
  incrementStep: Function;
  feedbacks?: feedbackTypes[];
};

const FirstRoute = ({course, incrementStep}: Props) => (
  <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
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
    {/* <Button
      style={styles.button}
      title={t('enroll')}
      onPress={() => {
        incrementStep();
      }}
    /> */}
  </ScrollView>
);

const SecondRoute = ({feedbacks}: Props) => (
  <ScrollView showsVerticalScrollIndicator={false}>
    {feedbacks?.map((feedback, index) => {
      return (
        <>
          <FeedbackCard feedback={feedback} />
          {index !== feedbacks.length - 1 && <Separator />}
        </>
      );
    })}
  </ScrollView>
);

const CourseDetailsTabView = ({course, incrementStep, feedbacks}: Props) => {
  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    {key: 'first', title: 'Overview'},
    {key: 'second', title: 'Feedback'},
  ]);
  const renderScene = SceneMap({
    first: () => <FirstRoute course={course} incrementStep={incrementStep} />,
    second: () => <SecondRoute feedbacks={feedbacks} />,
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
