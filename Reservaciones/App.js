import 'react-native-gesture-handler';
import * as React from 'react';
import {View} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import LoginView from './Screens/Login';
import SignUpView from './Screens/SignUp';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Login" options={{ headerShown: false }} component={LoginView} />
        <Stack.Screen name="SignUp" component={SignUpView} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
