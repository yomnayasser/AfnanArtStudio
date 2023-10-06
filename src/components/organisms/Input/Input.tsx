import React, {useState} from 'react';
import {Control, Controller} from 'react-hook-form';
import {getCurrentTheme} from 'react-native-theming';

import styles from './Input.styles';
import {Text, TextInput, TouchableOpacity, View} from '@wrappers/index';
import {Icon} from '@components/atoms';
import {LoginFormValues} from '@common/types';

type Props = {
  control: Control<LoginFormValues, any> | undefined;
  placeholder: string;
  onChange?: Function;
  name: 'password' | 'userName';
  type?: string;
  isSubmitted?: boolean;
};

const Input = ({control, placeholder, name, type}: Props) => {
  const theme = getCurrentTheme().def;
  const {darkText} = theme;
  const password = type === 'password' ? true : false;
  const [secureText, setSecureText] = useState(true);

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
                secureTextEntry={password ? (secureText ? true : false) : false}
                maxLength={20}
              />
              {password && (
                <TouchableOpacity
                  onPress={() => {
                    setSecureText(!secureText);
                  }}>
                  <Icon
                    name={!secureText ? 'eye' : 'eye-slash4'}
                    size={20}
                    style={styles.icon}
                  />
                </TouchableOpacity>
              )}
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

export default Input;
