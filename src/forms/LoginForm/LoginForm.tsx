import React from 'react';
import {useForm} from 'react-hook-form';
import {yupResolver} from '@hookform/resolvers/yup';
import {useNavigation} from '@react-navigation/native';

import {View} from '@wrappers/index';
import styles from './LoginForm.styles';
import {Button, Input} from '@components/index';
import {LoginFormSchema} from '@common/validations';
import {LoginScreenNavigationProp} from '@navigation/navigationTypes';
import {LoginFormValues} from '@common/types';
import {UserFaker} from '@fakers/index';

const LoginForm = () => {
  const navigation = useNavigation<LoginScreenNavigationProp>();
  const {
    control,
    handleSubmit,
    formState: {isSubmitted},
  } = useForm<LoginFormValues>({
    defaultValues: {
      userName: '',
      password: '',
    },
    resolver: yupResolver(LoginFormSchema),
    mode: 'onSubmit',
  });
  const onSubmit = handleSubmit(data =>
    UserFaker.map(user => {
      if (user.username === data.userName) {
        navigation.navigate('StudentNavigator', {
          screen: 'StudentsDashboard',
          params: {
            user: user,
          },
        });
      }
    }),
  );

  return (
    <View style={styles.container}>
      <View style={styles.inputContainer}>
        <Input
          control={control}
          placeholder="Username"
          name="userName"
          isSubmitted={isSubmitted}
        />
      </View>
      <View style={styles.inputContainer}>
        <Input
          control={control}
          placeholder="Password"
          name="password"
          type="password"
          isSubmitted={isSubmitted}
        />
      </View>
      <Button title="Login" style={styles.button} onPress={onSubmit} />
    </View>
  );
};

export default LoginForm;
