import React, { useState, useEffect } from 'react';
import { Map, MapMarker, Polyline } from 'react-kakao-maps-sdk';

const KakaoMap = () => {
  const [state, setState] = useState({
    center: {
      lat: 33.450701,
      lng: 126.570667,
    },
    errMsg: null,
    isLoading: true,
  });

  useEffect(() => {
    const fetchUserLocation = async () => {
      try {
        if (navigator.geolocation) {
          const position: GeolocationPosition =
            await new Promise<GeolocationPosition>((resolve, reject) => {
              navigator.geolocation.getCurrentPosition(resolve, reject);
            });
          setState((prev) => ({
            ...prev,
            center: {
              lat: position.coords.latitude,
              lng: position.coords.longitude,
            },
            isLoading: false,
          }));
        }
        // else {
        //   setState((prev) => ({
        //     ...prev,
        //     errMsg: 'geolocation을 사용할 수 없어요..',
        //     isLoading: false,
        //   }));
        // }
      } catch (err: any) {
        setState((prev) => ({
          ...prev,
          errMsg: err.message,
          isLoading: false,
        }));
      }
    };

    fetchUserLocation();
  }, []);

  return (
    <>
      <Map
        center={state.center}
        style={{
          width: '100%',
          height: '900px',
        }}
        level={3}
      >
        {!state.isLoading && (
          <MapMarker position={state.center}>
            <div style={{ padding: '5px', color: '#000' }}>
              {state.errMsg ? state.errMsg : '현재위치'}
            </div>
          </MapMarker>
        )}
        {/* 음식점 마커 */}
        <MapMarker position={{ lat: 35.8716862, lng: 128.5646145 }}>
          <div style={{ color: '#000' }}>대구 팔공막창</div>
        </MapMarker>
        <Polyline
          path={[
            [
              { lat: 36.3493063, lng: 127.377581 },
              { lat: 35.8716862, lng: 128.5646145 },
            ],
          ]}
          strokeWeight={5} // 선의 두께 입니다
          strokeColor={' blue '} // 선의 색깔입니다
          strokeOpacity={0.7} // 선의 불투명도 입니다 1에서 0 사이의 값이며 0에 가까울수록 투명합니다
          strokeStyle={'solid'} // 선의 스타일입니다
        />
      </Map>
    </>
  );
};

export default KakaoMap;
