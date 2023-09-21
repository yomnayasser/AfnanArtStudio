/* eslint-disable react-native/no-inline-styles */
import React, {useEffect} from 'react';
import {LogBox, Text, View} from 'react-native';
import {TouchableOpacity} from '@wrappers/index';
import themes from '@constants/themes';

LogBox.ignoreLogs(['Warning: ...']); // Ignore log notification by message
LogBox.ignoreAllLogs(); //

const App = () => {
  const getTheme = async () => {
    themes.map(theme => {
      if (theme.name === 'Light') {
        theme.apply();
      }
    });
  };
  useEffect(() => {
    getTheme();
  }, []);
  return (
    <View style={{marginTop: 100, flex: 1}}>
      <Text style={{textAlign: 'center', fontSize: 30}}>Buttons Options</Text>
      <TouchableOpacity
        style={{
          backgroundColor: '#069987',
          width: 200,
          borderRadius: 5,
          alignSelf: 'center',
          marginVertical: 20,
        }}>
        <Text
          style={{
            textAlign: 'center',
            padding: 20,
            color: 'white',
            fontSize: 18,
            fontWeight: 500,
          }}>
          Option 1
        </Text>
      </TouchableOpacity>
      {/* <TouchableOpacity
        style={{
          backgroundColor: '#0cb2a4',
          width: 200,
          borderRadius: 5,
          alignSelf: 'center',
          marginVertical: 20,
        }}>
        <Text
          style={{
            textAlign: 'center',
            padding: 20,
            color: 'white',
            fontSize: 18,
            fontWeight: 500,
          }}>
          Option 2
        </Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={{
          backgroundColor: '#6cdbd2',
          width: 200,
          borderRadius: 5,
          alignSelf: 'center',
          marginVertical: 20,
        }}>
        <Text
          style={{
            textAlign: 'center',
            padding: 20,
            color: 'white',
            fontSize: 18,
            fontWeight: 500,
          }}>
          Option 3
        </Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={{
          backgroundColor: '#98e5db',
          width: 200,
          borderRadius: 5,
          alignSelf: 'center',
          marginVertical: 20,
        }}>
        <Text
          style={{
            textAlign: 'center',
            padding: 20,
            color: 'white',
            fontSize: 18,
            fontWeight: 500,
          }}>
          Option 4
        </Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={{
          backgroundColor: '#c6ebe3',
          width: 200,
          borderRadius: 5,
          alignSelf: 'center',
          marginVertical: 20,
        }}>
        <Text
          style={{
            textAlign: 'center',
            padding: 20,
            color: 'white',
            fontSize: 18,
            fontWeight: 500,
          }}>
          Option 5
        </Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={{
          backgroundColor: '#c7eeeb',
          width: 200,
          borderRadius: 5,
          alignSelf: 'center',
          marginVertical: 20,
        }}>
        <Text
          style={{
            textAlign: 'center',
            padding: 20,
            color: 'white',
            fontSize: 18,
            fontWeight: 500,
          }}>
          Option 6
        </Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={{
          backgroundColor: '#e6e6e4',
          width: 200,
          borderRadius: 5,
          alignSelf: 'center',
          marginVertical: 20,
        }}>
        <Text
          style={{
            textAlign: 'center',
            padding: 20,
            color: '#141414',
            fontSize: 18,
            fontWeight: 500,
          }}>
          Option 7
        </Text>
      </TouchableOpacity> */}
    </View>
  );
};

export default App;
