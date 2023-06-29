mport MapView from 'react-native-maps';
import React, { useEffect, useState } from 'react';
import GeolocationService from 'react-native-geolocation-service';

const App = () => {
  const [currentLocation, setCurrentLocation] = useState({ latitude: 37.541, longitude: 126.986 });


  useEffect(() => {
    // 위치 권한 요청 및 위치 정보 가져오기
    const fetchCurrentLocation = async () => {
      try {
        const hasLocationPermission = await requestLocationPermission();

        if (hasLocationPermission !== undefined) {
          GeolocationService.getCurrentPosition(
            (position) => {
              const { latitude, longitude } = position.coords;
              setCurrentLocation({ latitude, longitude });
            },
            (error) => {
              console.log('Error getting current location:', error);
            },
            { enableHighAccuracy: true, timeout: 15000, maximumAge: 10000 }
          );
        } else {
          console.log('Location permission denied');
        }
      } catch (error) {
        console.log('Error requesting location permission:', error);
      }
    };

    fetchCurrentLocation();
  }, []);

  const requestLocationPermission = async () => {
    // 위치 권한 요청 로직 구현 (예: react-native-permissions 패키지 사용)
    // 위치 권한을 요청하고 사용자로부터 권한을 허용받아야 합니다.
  };

  const initialRegion = {
    latitude: currentLocation?.latitude || 37.541,
    longitude: currentLocation?.longitude || 126.986,
    latitudeDelta: 0.0922,
    longitudeDelta: 0.0421,
  };

  return <MapView style={{ width: '100%', height: '100%' }} initialRegion={initialRegion} />;
};

export default App;
