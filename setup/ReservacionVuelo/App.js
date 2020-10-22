import 'react-native-gesture-handler';
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import LogInView from './screens/LogInScreen';
import SignUp from './screens/SignUp';
import {
  LogBox,
} from 'react-native';


const Stack = createStackNavigator();

LogBox.ignoreLogs([
  'Non-serializable values were found in the navigation state',
]);

const App: () => React$Node = () => {
  
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="LogIn"
          component={LogInView}
          options={{
            headerShown: false,
            title: 'Log in',
        }} 
        />
        <Stack.Screen name="SignUp" 
          options={{
            headerShown: false,
          }} 
        component={SignUp} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;