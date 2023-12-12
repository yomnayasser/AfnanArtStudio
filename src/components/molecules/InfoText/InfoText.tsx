import React from 'react';
import {Controller, useForm} from 'react-hook-form';

import styles from './InfoText.styles';
import {Header} from '@components/index';
import {Text, TextInput, View} from '@wrappers/index';

type Props = {
  header: string;
  text: string | number;
  switchToInput?: boolean;
  setValue?: Function;
  valueData?: any;
};

const InfoText = ({
  header,
  text,
  switchToInput,
  setValue,
  valueData,
}: Props) => {
  const {control} = useForm({
    mode: 'onSubmit',
  });

  return (
    <View style={styles.row}>
      <Header headerText={header} style={styles.subHeader} />
      {switchToInput ? (
        <View>
          <Controller
            control={control}
            render={({field: {onChange, onBlur, value = text}}) => (
              <>
                <View>
                  <TextInput
                    onBlur={onBlur}
                    onChangeText={(input: string) => {
                      onChange(input);
                      let temp = {[header.split(' ').join('')]: input};
                      setValue && setValue({...valueData, ...temp});
                    }}
                    value={value}
                    editable={true}
                    style={styles.input}
                    maxLength={25}
                  />
                </View>
              </>
            )}
            name={header}
          />
        </View>
      ) : (
        <Text mediumSize style={styles.infoText}>
          {text}
        </Text>
      )}
    </View>
  );
};

export default InfoText;
