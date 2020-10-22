import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import styleLogin from '../styles/LogInStyle';
import { View, Text, TextInput, Image, CheckBox, TouchableOpacity, Linking  } from 'react-native';


const SignUp = () => {
   return (
    <View style={styleLogin.Father}>
        <Text style={styleLogin.TextTittle}>Sign Up</Text>
        <Text style={styleLogin.InputTittle}>First Name </Text>   
        <TextInput style={styleLogin.InputText}/>
        <Text style={styleLogin.InputTittle}>Email *</Text>
        <TextInput style={styleLogin.InputText}/>
        <Text style={styleLogin.InputTittle}>Password *</Text>
        <TextInput style={styleLogin.InputText}/>
        <Text style={styleLogin.InputTittle}>Use 8 or more characters with a mix of letters,
        numbers and symbols</Text>
        <CheckBox 
            style={styleLogin.checkBox} 
            value={true}
            title='Click Here'
        />


        <View style={styleLogin.ButomsArea}>
        
        <TouchableOpacity style={styleLogin.Buttons}> 
            <Text style={styleLogin.ButtonText}>Log In </Text>
        </TouchableOpacity>
        
        <Text style={{textAlign: 'center', color:'#B6B7BA'}}>or</Text>
        
        <TouchableOpacity style={styleLogin.Buttons}> 
            <Text style={styleLogin.ButtonText}>Log In with Google</Text>
        </TouchableOpacity>

        <Text style={{color: '#B6B7BA',textAlign: 'center', marginTop: 10, marginBottom: 5}}>Don´t have an account? 
            <Text style={{color: '#5974F5', textDecorationLine: 'underline'}} onPress={ ()=> Linking.openURL('https://google.com') }>Sign Up</Text> 
        </Text>    
        </View>
    </View>
   );
}

export default SignUp;