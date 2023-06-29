/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {
  SafeAreaView
} from 'react-native';
import Kakao from './view/kakaomap';

function App(): JSX.Element {

  return (
    <SafeAreaView>
      <Kakao />
    </SafeAreaView>
  );
}

export default App;
