import React from 'react';
import {WebView} from 'react-native-webview';

const KakaoMap = () => {
  const API_KEY = 'b7122f0e32599a8abfc8b1b8a87a3892';
  const html = `
    <!DOCTYPE html>
    <html>
      <head>
        <meta name="viewport" content="initial-scale=1.0, user-scalable=no" />
        <script type="text/javascript" src="//dapi.kakao.com/v2/maps/sdk.js?appkey=${API_KEY}"></script>
        <style type="text/css">
          html, body, #map { width: 100%; height: 100%; margin: 0; padding: 0; }
        </style>
      </head>
      <body>
        <div id="map"></div>
        <script type="text/javascript">
          var map = new kakao.maps.Map(document.getElementById('map'), {
            center: new kakao.maps.LatLng(33.450701, 126.570667),
            level: 3
          });
        </script>
      </body>
    </html>
  `;

  return <WebView source={{html}} />;
};

export default KakaoMap;
