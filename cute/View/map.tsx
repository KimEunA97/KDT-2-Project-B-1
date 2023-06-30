import React, {useState, useEffect} from 'react';
import MapView, {Marker, Polyline} from 'react-native-maps';
import Geolocation from '@react-native-community/geolocation';
import {check, PERMISSIONS, RESULTS, request} from 'react-native-permissions';

interface Coordinate {
  latitude: number;
  longitude: number;
  latitudeDelta: number; // 수직 범위
  longitudeDelta: number; // 수평 범위
}

const App = () => {
  const [initialPosition, setInitialPosition] = useState<Coordinate | null>(
    null,
  );

  useEffect(() => {
    const checkLocationPermission = async () => {
      const res = await check(PERMISSIONS.ANDROID.ACCESS_FINE_LOCATION);

      if (res === RESULTS.DENIED) {
        const res2 = await request(PERMISSIONS.ANDROID.ACCESS_FINE_LOCATION);
        if (res2 === RESULTS.GRANTED) {
          getLocation();
        }
      } else if (res === RESULTS.GRANTED) {
        getLocation();
      }
    };

    const getLocation = () => {
      Geolocation.getCurrentPosition(
        position => {
          const {latitude, longitude} = position.coords;

          console.log(position.coords); // 위치 정보 출력

          setInitialPosition({
            latitude,
            longitude,
            latitudeDelta: 3,
            longitudeDelta: 3,
          });
        },
        error => {
          console.log(error.code, error.message);
        },
        {enableHighAccuracy: true, timeout: 15000, maximumAge: 10000},
      );
    };

    checkLocationPermission();
  }, []);

  return (
    initialPosition && (
      <MapView
        style={{width: '100%', height: '100%'}}
        initialRegion={initialPosition}
        showsUserLocation={true}
      >
      <Marker
          coordinate={{latitude: 36.3492357, longitude: 127.377491}}
          title="출발"
          description="그린컴퓨터아트학원"></Marker>
      <Marker
          coordinate={{latitude: 35.871686, longitude: 128.5646145}}
          title="도착"
          description="오렌지막창"></Marker>
        <Polyline
    coordinates={[
      {latitude: 36.3492357, longitude: 127.377491},
      {latitude: 35.871686, longitude: 128.5646145},

    ]}
    strokeColor="#000" // fallback for when `strokeColors` is not supported by the map-provider
    strokeColors={[
      '#7F0000',
      '#00000000', // no color, creates a "long" gradient between the previous and next coordinate
      '#B24112',
      '#E5845C',
      '#238C23',
      '#7F0000',
    ]}
    strokeWidth={6}
  />
      </MapView>

    )
  );
};

export default App;
