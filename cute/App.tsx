/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, {View} from 'react-native';
import KakaoMap from './View/KakaoMap';
import PathBox from './View/PathBox';

function App(): JSX.Element {
  return (
    <View>
      <KakaoMap></KakaoMap>
      <PathBox></PathBox>
    </View>
  );
}

export default App;
