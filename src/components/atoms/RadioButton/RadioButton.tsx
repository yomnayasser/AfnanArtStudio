import RadioGroup from 'react-native-radio-buttons-group';
import React, {useState} from 'react';

type Props = {
  radioButtonData: any;
};

const RadioButton = ({radioButtonData}: Props) => {
  const [selectedId, setSelectedId] = useState();

  return (
    <RadioGroup
      radioButtons={radioButtonData}
      onPress={setSelectedId}
      selectedId={selectedId}
    />
  );
};

export default RadioButton;
