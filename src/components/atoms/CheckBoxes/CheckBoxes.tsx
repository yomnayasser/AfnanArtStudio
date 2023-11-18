import React from 'react';
import {ViewStyle} from 'react-native';
import CheckBox from 'react-native-check-box';
import {getCurrentTheme} from 'react-native-theming';

import {View} from '@wrappers/index';
import styles from './CheckBoxes.styles';
import {checkboxesTypes} from '@common/types';

type Props = {
  checkBoxesData: checkboxesTypes[];
  style: ViewStyle;
  checkboxes: boolean[];
  setCheckboxes: Function;
};

const CheckBoxes = ({
  checkBoxesData,
  style,
  checkboxes,
  setCheckboxes,
}: Props) => {
  const theme = getCurrentTheme().def;
  const {checkboxChecked} = theme;
  const handleOnChange = (position: number) => {
    const updatedCheckedState = checkboxes.map((item, index) =>
      index === position ? !item : item,
    );

    setCheckboxes(updatedCheckedState);
  };

  return (
    <View style={style ? style : {}}>
      {checkBoxesData.map((checkbox, index) => {
        return (
          <CheckBox
            onClick={() => {
              handleOnChange(index);
            }}
            isChecked={checkboxes[index]}
            rightText={checkbox.name}
            rightTextStyle={styles.checkboxText}
            style={styles.checkbox}
            checkedCheckBoxColor={checkboxChecked}
            uncheckedCheckBoxColor={checkboxChecked}
          />
        );
      })}
    </View>
  );
};

export default CheckBoxes;
