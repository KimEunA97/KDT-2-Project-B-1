import MapView,{ Marker} from 'react-native-maps';
import React from 'react';
import { View } from 'react-native';


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
          coordinate={{latitude: 37.541, longitude: 126.986}}
          title="this is a marker"
          description="this is a marker example"></Marker>
  </MapView>
  </View>
  )
}

export default App;