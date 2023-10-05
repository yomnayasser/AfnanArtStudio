import React from 'react';
import {yupResolver} from '@hookform/resolvers/yup';
import {useForm} from 'react-hook-form';

import styles from './LoginForm.styles';
import {View} from '@wrappers/index';
import {Button, Input} from '@components/index';
import {LoginFormSchema} from '@common/validations';
import {layouts} from '@constants/styles';

const LoginForm = () => {
  const {control, handleSubmit} = useForm({
    defaultValues: {
      userName: '',
      password: '',
    },
    resolver: yupResolver(LoginFormSchema),
    mode: 'all',
  });
  const onSubmit = handleSubmit(data => console.log(data));

  return (
    <View style={{...layouts.allCentered, ...layouts.my.xxxl}}>
      <View style={styles.inputContainer}>
        <Input control={control} placeholder="Username" name="userName" />
      </View>
      <View style={styles.inputContainer}>
        <Input
          control={control}
          placeholder="Password"
          name="password"
          type="password"
        />
      </View>
      <Button title="Login" style={styles.button} onPress={onSubmit} />
    </View>
  );
};

export default LoginForm;
