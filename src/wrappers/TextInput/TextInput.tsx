import React from 'react';
import {TextInput as RNTextInput, Platform} from 'react-native';
import {createThemedComponent, getCurrentTheme} from 'react-native-theming';

const ThemedTextInput = createThemedComponent(RNTextInput);

const TextInput = ({...reset}) => {
  return (
    <ThemedTextInput
      cursorColor={getCurrentTheme().def.inputSelectionColor}
      placeholderTextColor={getCurrentTheme().def.text}
      // selection color is not working on Android
      selectionColor={
        Platform.OS === 'ios' ? getCurrentTheme().def.inputSelectionColor : null
      }
      {...reset}
    />
  );
};

export default TextInput;
