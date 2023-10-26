import {getCurrentTheme} from 'react-native-theming';
import {fonts, layouts} from '@constants/styles';

export const getRadioButtonData = course => {
  let radioButtonsData = [];
  course?.packagesName?.map((coursePackage, index) => {
    radioButtonsData.push({
      id: index,
      label: coursePackage,
      value: course?.packagesPrices[index],
      borderColor: getCurrentTheme().def.outlinedPrimaryButtonBorder,
      color: getCurrentTheme().def.outlinedPrimaryButtonBorder,
      labelStyle: {
        fontSize: getCurrentTheme().def.fontNormal,
        width: 150,
        ...layouts.px.sm,
        ...layouts.py.md,
        fontFamily: fonts.poppinsMedium,
      },
    });
  });
  return radioButtonsData;
};
