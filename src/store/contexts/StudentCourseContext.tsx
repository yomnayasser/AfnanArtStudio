import React, {createContext, useState} from 'react';

const StudentCourseContext = createContext();

// Create a provider component
const StudentCourseContextProvider = props => {
  const [Value, setValue] = useState({
    activeStep: 1,
    course: null,
  });

  const incrementStep = () =>
    setValue({...Value, activeStep: Value.activeStep + 1});
  const decrementStep = () => {
    if (Value.activeStep !== 1) {
      setValue({...Value, activeStep: Value.activeStep - 1});
    }
  };
  return (
    <StudentCourseContext.Provider
      value={{
        incrementStep,
        decrementStep,
        Value,
        setValue,
      }}>
      {props.children}
    </StudentCourseContext.Provider>
  );
};

export {StudentCourseContext, StudentCourseContextProvider};
