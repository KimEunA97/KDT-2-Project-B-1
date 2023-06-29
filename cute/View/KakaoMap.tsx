import React from 'react';
import {KakaoMapView} from '@jiggag/react-native-kakao-maps';

const App = () => {
  return (
    <KakaoMapView
      markerImageName="customImageName" // 옵션1
      markerImageUrl="https://github.com/jiggag/react-native-kakao-maps/blob/develop/example/custom_image.png?raw=true" // 옵션2
      markerList={[
        {
          lat: 37.59523,
          lng: 127.086,
          markerName: 'marker',
        },
        {
          lat: 37.59523,
          lng: 127.08705,
          markerName: 'marker2',
        },
      ]}
      width={400}
      height={900}
      centerPoint={{
        lat: 37.59523,
        lng: 127.086,
      }}
      onChange={(event: unknown) => {
        console.log(event);
      }}
    />
  );
};

export default App;
