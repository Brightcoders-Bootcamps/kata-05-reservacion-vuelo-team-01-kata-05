import React from 'react';
import styleLogin from '../Styles/LoginStyle';
import { GoogleSocialButton } from "react-native-social-buttons";
import { View, Text, TextInput, TouchableOpacity, Linking} from 'react-native';




const Login = () => {
   
   return (

      <View style={styleLogin.Father}>
        
        <View>
            <Text style={styleLogin.TextTittle}>Log In</Text>
            <Text style={styleLogin.InputTittle}>Email * </Text>   
            <TextInput style={styleLogin.InputText}/>
            <Text style={styleLogin.InputTittle}>Password *</Text>
            <View style={styleLogin.InputText}>
               <TextInput secureTextEntry={true}></TextInput>
            </View>
        </View>
         <View style={styleLogin.ButomsArea}>
            <TouchableOpacity
            style={styleLogin.loginScreenButton}
            underlayColor='#fff'>
            <Text style={styleLogin.loginText}>Login</Text>
         </TouchableOpacity>
            <Text style={{textAlign: 'center', color:'#B6B7BA', margin: 10}}>or</Text>
            <TouchableOpacity>
               <GoogleSocialButton/>
            </TouchableOpacity>
            <Text style={{marginTop: 20}}>
               <Text style={{color: '#B6B7BA'}}>Don´t have an account? </Text>
               <Text style={{color: '#5974F5', textDecorationLine: 'underline'}} 
		         onPress={ ()=> Linking.openURL('https://www.google.com/') }>Sign Up</Text>    
            </Text>                
         </View>
      </View>
   );
}

export default Login;