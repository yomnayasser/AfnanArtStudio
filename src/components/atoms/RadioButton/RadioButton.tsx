import RadioGroup from 'react-native-radio-buttons-group';
import React from 'react';

type Props = {
  radioButtonData: any;
  setSelectedId: (selectedId: string) => void;
  selectedId: string;
};

const RadioButton = ({radioButtonData, setSelectedId, selectedId}: Props) => {
  return (
    <RadioGroup
      radioButtons={radioButtonData}
      onPress={setSelectedId}
      selectedId={selectedId}
    />
  );
};

export default RadioButton;
