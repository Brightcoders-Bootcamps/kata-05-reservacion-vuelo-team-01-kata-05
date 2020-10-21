import React from 'react';

import LogInScreen from './screens/LogInScreen';

import {View, Text, StyleSheet} from 'react-native';

const App = () => {
   return (
      <View style={{flex: 1, justifyContent: 'flex-start', alignItems: 'center', marginRight: 25, marginLeft: 25, height:'100%'}}>
         <LogInScreen />
      </View>
   );
}

export default App;