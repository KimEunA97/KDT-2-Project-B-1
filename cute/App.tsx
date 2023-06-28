import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import KakaoMap from './map/KakaoMap';

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="KakaoMap">
        <Stack.Screen name="KakaoMap" component={KakaoMap} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
