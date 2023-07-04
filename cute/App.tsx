import React from 'react';
<<<<<<< HEAD
import { SafeAreaView, StyleSheet } from 'react-native';
// import KakaoService from './View/kakaoService';
import GoogleMap from './View/GoogleMap';
import RecommendedPath from './View/RecommendedPath';
import Map from './View/map';
import Parkingbutton from './View/Parkingbutton';

function App() {
  return (
    <SafeAreaView style={styles.container}>
      {/* <GoogleMap></GoogleMap>
       */}
=======
import {SafeAreaView, StyleSheet} from 'react-native';
// import InputTest from './View/getExample';
import Map from './View/map';
import Welcome from './First/Welcomescreen';

const App: React.FC = () => {
  return (
    <SafeAreaView style={styles.container}>
      {/* <Welcome /> */}

>>>>>>> origin/kimjongyoon96/issue30
      <Map></Map>
      <Parkingbutton></Parkingbutton>
      <RecommendedPath></RecommendedPath>
      {/* <KakaoService /> */}
    </SafeAreaView>
  );
};

<<<<<<< HEAD
=======
// 최상위 부모요소의 설정없이는 안먹어서 부득이하게..
>>>>>>> origin/kimjongyoon96/issue30
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
<<<<<<< HEAD

=======
>>>>>>> origin/kimjongyoon96/issue30
export default App;
