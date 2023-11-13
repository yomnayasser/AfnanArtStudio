import React from 'react';
import {Dimensions} from 'react-native';
import MapView, {Marker} from 'react-native-maps';

import styles from './Map.styles';

type Props = {
  latitude: number;
  longitude: number;
};

const Map = ({latitude, longitude}: Props) => {
  const {width, height} = Dimensions.get('window');
  const zoomLevel = 22;

  const latitudeDelta = 0.01 * Math.pow(2, 21 - zoomLevel);
  const longitudeDelta = (latitudeDelta * width) / height;
  return (
    <MapView
      style={styles.container}
      initialRegion={{
        latitude: latitude,
        longitude: longitude,
        latitudeDelta: latitudeDelta,
        longitudeDelta: longitudeDelta,
      }}>
      <Marker
        key={1}
        coordinate={{
          latitude: latitude,
          longitude: longitude,
        }}
      />
    </MapView>
  );
};

export default Map;
