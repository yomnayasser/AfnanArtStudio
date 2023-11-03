import React from 'react';

import {Icon} from '@components/index';
import {Text, View} from '@wrappers/index';
import styles from './FeedbackCard.styles';
import {feedbackTypes} from '@common/types';

type Props = {
  feedback: feedbackTypes;
};

const FeedbackCard = ({feedback}: Props) => {
  return (
    <View style={styles.container}>
      <View style={styles.innerContainer}>
        <View style={styles.row}>
          <Text medium>{feedback?.user}</Text>
          <Text medium smallSize color={'@grayText'} style={styles.date}>
            {feedback?.date}
          </Text>
        </View>
        <View style={styles.iconContainer}>
          {Array.from(Array(feedback?.starsRate), (e, i) => {
            return (
              <Icon
                name="star4"
                size={18}
                style={styles.icon}
                color="@startIcon"
              />
            );
          })}
        </View>

        <Text style={styles.feedback}>{feedback?.feedback}</Text>
      </View>
    </View>
  );
};

export default FeedbackCard;
