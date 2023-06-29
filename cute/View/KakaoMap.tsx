import React from 'react';
import {KakaoMapView} from '@jiggag/react-native-kakao-maps';
const App = () => {
  return (
    <KakaoMapView
      markerImageName="customImageName" // 옵션1
      markerImageUrl="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTy8z3aU2kmy1R1yJmvtxghCoWvkidhcU-ZMw&usqp=CAU" // 옵션2
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
      height={300}
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
