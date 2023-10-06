import {UserFaker} from '../../fakers/index';
import {t} from 'i18next';
import * as yup from 'yup';

const LoginFormSchema = yup.object().shape({
  userName: yup
    .string()
    .required(`${t('required_error')}`)
    .typeError('')
    .matches(/^\S*$/, 'No whitespace allowed')
    .test({
      name: 'equality',
      test: function (value, ctx) {
        let found = false;
        UserFaker.map(user => {
          if (user.username === value) {
            found = true;
          }
        });
        if (!found)
          return ctx.createError({
            message: () => {
              return `${t('user_not_found')}`;
            },
          });

        return true;
      },
    }),
  password: yup.string().required(`${t('required_error')}`),
  // .matches(/^(?=.*[a-z])/, 'Password Must Contain One Lowercase Character')
  // .matches(/^(?=.*[A-Z])/, 'Password Must Contain One Uppercase Character')
  // .matches(/^(?=.*[0-9])/, 'Password Must Contain One Number Character')
  // .matches(
  //   /^(?=.*[!@#\$%\^&\*])/,
  //   '  Password Must Contain  One Special Case Character',
  // ),
});

export default LoginFormSchema;

// firstName: yup
//     .string()
//     .required('Please Enter Your Firstname')
//     .matches(
//       /^[a-zA-Z\u00C0-\u017F]+(?:\s[a-zA-Z\u00C0-\u017F]+)*$/,
//       'Please enter valid name',
//     ),
//   lastName: yup
//     .string()
//     .required('Please Enter Your Lastname')
//     .matches(
//       /^[a-zA-Z\u00C0-\u017F]+(?:\s[a-zA-Z\u00C0-\u017F]+)*$/,
//       'Please enter valid name',
//     ),

//   renterPassword: yup
//     .string()
//     .required('Please retype your password.')
//     .oneOf([yup.ref('password')], 'Password is not matching'),
//   nationality: yup.string().required('Please Choose Nationality'),
