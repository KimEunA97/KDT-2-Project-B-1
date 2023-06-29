import React, { useState, useEffect } from "react";
import { View,StyleSheet } from "react-native";
import { MapView, Marker } from "react-native-maps";

const Kakao = () => {

  const [latitude, setLatitude] = useState(37.566667);
  const [longitude, setLongitude] = useState(126.977778);

  let map;

  useEffect(() => {
    // 카카오 지도 로드
    map = new MapView({
      container: "map",
      center: {
        latitude,
        longitude,
      },
      zoom: 15,
    });

    // 마커 추가
    const marker = new Marker({
      position: {
        latitude:latitude,
        longitude:longitude,
      },
    });
    map.addMarker(marker);
  }, []);

  return (
    <View style={styles.container}>
      <MapView ref={map} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
export default Kakao;