import React from 'react';
import {TextInput} from 'react-native-gesture-handler';
import {Control, Controller} from 'react-hook-form';
import {Text, View} from '@wrappers/index';
import {getCurrentTheme} from 'react-native-theming';

type Props = {
  control: any;
  placeholder: string | number;
  onChange?: Function;
  name: string;
  isSubmitted?: boolean;
};
const EditInputText = ({control, placeholder, name}: Props) => {
  const theme = getCurrentTheme().def;
  const {darkText} = theme;
  return (
    <View>
      <Controller
        control={control}
        render={({field: {onChange, onBlur, value}, fieldState: {error}}) => (
          <>
            <View style={styles.inputContainer}>
              <TextInput
                placeholder={placeholder}
                onBlur={onBlur}
                onChangeText={onChange}
                value={value}
                placeholderTextColor={darkText}
                editable={true}
                style={styles.input}
                maxLength={20}
              />
            </View>
            {error && (
              <Text smallSize color={'@textInputError'} style={styles.error}>
                {error.message}
              </Text>
            )}
          </>
        )}
        name={name}
      />
    </View>
  );
};

export default EditInputText;
