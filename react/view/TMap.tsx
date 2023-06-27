import React, { useEffect } from "react";

// declare const Tmapv2: {
//   LatLng: Tmapv2.LatLng;
//   Map: typeof Tmapv2.Map;
// };

export function Tmap() {
  useEffect(() => {
    const map = new Tmapv2.Map("map_div", {
      center: new Tmapv2.LatLng(37.5652045, 126.98702028),
      width: "100%",
      height: "400px",
      zoom: 17,
    });
  }, []);

  return <div id="map_div"></div>;
}
