import {Animated, Pressable} from 'react-native';
import {getCurrentTheme} from 'react-native-theming';
import React, {useEffect, useRef, useState} from 'react';

import styles from './Input.styles';
import {Text, TextInput, View} from '@wrappers/index';
import i18n from '@common/locales';
// import {IMAGES} from '@common/assets';
// import {Icon} from '@common/components';
// import {TextInputProps} from '@common/types';
// import {Text, View, Pressable, TextInput} from '@common/wrappers';

const Input = (props: any) => {
  const {
    field: {name, onBlur, onChange, value},
    form: {errors, isValid, touched, setFieldTouched},
    maxLength,
    keyboardType,
    placeholder,
    onChangeTxt = () => {},
    currencyInput,
    multiline,
    numberOfLines,
    resetable,
    isSelect,
    disabled,
    hideErrors,
    onInputPressedIn,
    fullWidth,
    style,
    borderless,
    resetHandler,
    ...reset
  } = props;

  const [show, setShow] = useState('eye-off');
  const [isInputFocused, setIsInputFocused] = useState(false);
  const [isResetable, setIsResetable] = useState(resetable || false);
  const [securedText, setSecuredText] = useState(reset?.secureTextEntry);

  const textRef = useRef(null);
  const moveText = useRef(new Animated.Value(0)).current;

  let iconOption = {
    eye: IMAGES.eye,
    'eye-off': IMAGES.eyeOff,
  };
  const moveTextTop = () => {
    Animated.timing(moveText, {
      toValue: 1,
      duration: 200,
      useNativeDriver: true,
    }).start();
  };

  useEffect(() => {
    if (value !== '') {
      moveTextTop();
    } else {
      moveTextBottom();
    }
  }, [value]);

  const changePasswordState = () => {
    if (securedText === true) {
      setShow('eye');
      setSecuredText(false);
    } else if (securedText === false) {
      setShow('eye-off');
      setSecuredText(true);
    }
  };

  const moveTextBottom = () => {
    Animated.timing(moveText, {
      toValue: 0,
      duration: 200,
      useNativeDriver: true,
    }).start();
  };

  const yVal = moveText.interpolate({
    inputRange: [0, 1],
    outputRange: [15, 3],
  });

  const animationStyle = {
    transform: [
      {
        translateY: yVal,
      },
    ],
  };

  const hasError = errors[name] && touched[name];
  const formIsValidAndTouched = isValid && touched[name];

  return (
    <View style={style}>
      <View style={fullWidth ? styles.flexedView : {}}>
        <View
          style={[
            styles.inputBase,
            styles.inputContainer,
            hasError ? styles.inputErrorBase : {},
            formIsValidAndTouched ? styles.inputSuccessBase : {},
            isInputFocused ? (!hasError ? styles.inputFocusedSuccess : {}) : {},
            disabled ? styles.inputDisabled : {},
            multiline ? styles.textAreaCase : styles.defaultHeight,
            borderless ? styles.borderless : {},
          ]}>
          <TextInput
            {...reset}
            keyboardType={keyboardType ? keyboardType : 'default'}
            ref={textRef}
            autoCapitalize={'none'}
            value={value}
            maxLength={maxLength ? maxLength : null}
            placeholderTextColor={getCurrentTheme().def.placeholderText}
            onEndEditing={(text: any) => {
              setFieldTouched(name);

              return value;
            }}
            onChangeText={(text: string) => {
              // text = convertArabicNumbersToEnglish(text);
              // text = reset?.removeChars ? removeCharsAndSpace(text) : text;
              onChangeTxt && onChangeTxt(text);
              onChange(name)(text);
            }}
            onPressIn={() => {
              onInputPressedIn && onInputPressedIn();
            }}
            blurOnSubmit
            textAlign={i18n.language === 'ar' ? 'right' : 'left'}
            onFocus={() => {
              setIsInputFocused(true);
            }}
            onBlur={() => {
              setFieldTouched(name);
              setIsInputFocused(false);
              onBlur && onBlur(name);
            }}
            style={[
              value?.length > 0
                ? [styles.marginTextInput, styles.textInput]
                : styles.textInput,
              formIsValidAndTouched ? styles.success : {},
              styles.inputTextAlign,
              multiline && styles.textArea,
            ]}
            editable={disabled ? false : true}
            multiline={multiline}
            numberOfLines={numberOfLines}
            secureTextEntry={
              reset?.secureTextEntry === true ? securedText : false
            }
          />
          {reset?.secureTextEntry && reset?.editable !== false && (
            <Pressable onPress={changePasswordState} />
          )}

          {isResetable && isInputFocused && value ? (
            <Pressable
              style={[
                styles.icon,
                formIsValidAndTouched ? styles.success : {},
                hasError && !hideErrors ? styles.error : {},
              ]}
              onPress={() => {
                onChange(name)('');
                isResetable && resetHandler && resetHandler();
              }}>
              {/* <Icon color={'@iconDefaultColor'} name="close-circle" /> */}
            </Pressable>
          ) : null}
          {isSelect ? (
            <Pressable
              style={[
                styles.icon,
                formIsValidAndTouched ? styles.success : {},
                hasError && !hideErrors ? styles.error : {},
              ]}
              onPress={() => onChange(name)('')}>
              {/* <Icon
                style={[
                  styles.icon,
                  formIsValidAndTouched ? styles.success : {},
                  hasError && !hideErrors ? styles.error : {},
                ]}
                name={value ? 'arrow-up-24' : 'arrow-down-14'}
              /> */}
            </Pressable>
          ) : null}
          {currencyInput && <Text style={styles.currency}>{t('sar')}</Text>}
        </View>
        <Animated.View
          pointerEvents="none"
          style={[animationStyle, styles.labelContainer]}>
          <Text
            style={[
              value?.length > 0
                ? {...styles.label}
                : {...styles.label, ...styles.placeholderNotFocused},
              hasError ? {...styles.label, ...styles.error} : {},
              formIsValidAndTouched ? {...styles.label} : {},
              disabled ? {...styles.label, ...styles.disabled} : {},
              value?.length > 0 ? styles.movedUp : styles.movedDown,
            ]}>
            {placeholder}
          </Text>
        </Animated.View>

        {hasError && !hideErrors && (
          <Text smallSize style={styles.error}>
            {errors[name]}
          </Text>
        )}
      </View>
    </View>
  );
};

export default Input;
