import 'react-native-gesture-handler';
import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {View, StyleSheet} from 'react-native';
import LoginView from './Screens/Login';

export default function App() {
  return (
    <NavigationContainer>
      <View style={{flex: 1, justifyContent: 'center'}}>
        <LoginView />
      </View>
    </NavigationContainer>
  );
}
