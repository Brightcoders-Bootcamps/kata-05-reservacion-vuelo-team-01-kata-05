import 'react-native-gesture-handler';
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import LoginView from './Screens/Login';
import Signup from './Screens/Signup';

import {
  View,
  StyleSheet,
} from 'react-native';

export default function App() {
  return (
    <NavigationContainer>
      <View style={{flex: 1, justifyContent: 'center', }}>
        <Signup />
      </View>
    </NavigationContainer>
  );
}

