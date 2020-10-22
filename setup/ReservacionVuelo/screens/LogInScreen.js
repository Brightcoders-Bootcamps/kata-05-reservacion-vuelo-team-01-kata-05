import React from 'react';
import styleLogin from '../styles/LogInStyle';
import { View, Text, TextInput, Button } from 'react-native';

const LogInView = () => {
   return (
      <View style={styleLogin.Father}>
         <Text style={styleLogin.TextTittle}>Log In</Text>
         <Text style={styleLogin.InputTittle}>Email* </Text>
         <TextInput style={styleLogin.InputText} placeholder="Email here" />
            <Text style={styleLogin.InputTittle}>Password*</Text>
         <TextInput style={styleLogin.InputText} placeholder="Password here"  />
         <View style={styleLogin.ButomsArea}>
            <Button   title="Sign In"/>
            <Text> Or </Text>
            <Button title="Register"/>
         </View>
      </View>
   );
}

export default LogInView;