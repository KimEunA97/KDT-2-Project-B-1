import React, {useState} from 'react';
import {Image, View} from 'react-native';
import MapView, {Marker, PROVIDER_GOOGLE} from 'react-native-maps';
import MetroCoord from '../model/MetropolitanCoordinate.json';
import addLatLngDate, {
  latLngDeltaDataType,
} from '../model/mapviewInitialRegionData';
import MeongOriModal from './MeongOriModal';
import {axiosTest} from '../model/crawling';

const GoogleMap = () => {
  const [windowBool, setWindowBool] = useState<boolean>(false);
  const [isMapReady, setIsMapReady] = useState<boolean>(false);
  const latLngDeltaData: latLngDeltaDataType = {
    latitudeDelta: 0.1,
    longitudeDelta: 0.5,
  };
  const openModal = () => {
    setWindowBool(true);
  };
  const closeModal = () => {
    setWindowBool(false);
  };
  const onMapReady = () => {
    setIsMapReady(true);
  };

  const renderLoading = () => {
    return (
      <View style={{flex: 1}}>
        <Text>Loading Map...</Text>
      </View>
    );
  };
  axiosTest();

  const renderLoading = () => {
    return (
      <View style={{flex: 1}}>
        <Text>Loading Map...</Text>
      </View>
    );
  };
  axiosTest();

  return (
    <>
      {isMapReady ? null : renderLoading()}
      <View style={{flex: 1}}>
        <MapView
          onMapReady={onMapReady}
          style={{
            width: '100%',
            height: '100%',
            minHeight: 800,
            minWidth: 200,
          }}
          provider={PROVIDER_GOOGLE}
          initialRegion={addLatLngDate(MetroCoord.daejeon, latLngDeltaData)}>
          <Marker
            key={Object.keys(MetroCoord.daejeon)[0]}
            coordinate={MetroCoord.daejeon}
            description={'대전 소보로빵'}
            onPress={openModal}>
            <Image
              source={require('../Img/Daejeon_Twigim-soboro-bread.png')}
              style={{width: 70, height: 70}}
            />
          </Marker>
        </MapView>
      </View>
      <MeongOriModal closeModal={closeModal} windowBool={windowBool} />
    </>
  );
};
export default GoogleMap;
