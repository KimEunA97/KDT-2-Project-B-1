import MapView,{ Marker} from 'react-native-maps';
import React from 'react';
import { View } from 'react-native';
import Geolocation from 'react-native-geolocation-service';


const App = () => {
  const initialRegion = {
    latitude: 37.541,
    longitude:126.986,
    latitudeDelta: 0.0922,
    longitudeDelta: 0.0421,
  };

  return( 
  <View>
  <MapView style={{ width: '100%', height: '100%' }} initialRegion={initialRegion} >
  <Marker
          coordinate={{latitude: 36.3492357, longitude: 127.377491}}
          title="출발"
          description="그린컴퓨터아트학원"></Marker>
  <Marker
          coordinate={{latitude: 35.871686, longitude: 128.5646145}}
          title="도착"
          description="막창"></Marker>
  </MapView>
  </View>
  )
}

export default App;