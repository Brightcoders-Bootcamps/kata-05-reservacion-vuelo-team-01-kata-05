import React from 'react';
import styleLogin from '../Styles/LoginStyle';
import { View, Text, TextInput, Image, TouchableOpacity, Linking, Component, Pressable  } from 'react-native';

const Login = () => {
   
   return (

      <View style={styleLogin.Father}>
        
        <View>
            <Text style={styleLogin.TextTittle}>Log In</Text>

            <Text style={styleLogin.InputTittle}>Email * </Text>   
            <TextInput style={styleLogin.InputText}/>
            
            <Text style={styleLogin.InputTittle}>Password *</Text>
            <View style={styleLogin.InputText}>
               <TextInput secureTextEntry={true}>
               </TextInput>
               {/* <Pressable><Image style={styleLogin.ShowPass} source={require('../Images/eye.png')} ></Image></Pressable> */}
            </View>
        </View>

         <View style={styleLogin.ButomsArea}>
              <TouchableOpacity style={styleLogin.Buttons}> 
                 <Text style={styleLogin.ButtonText}>Login </Text>
              </TouchableOpacity>
              
              <Text style={{textAlign: 'center', color:'#B6B7BA', margin: 10}}>or</Text>

              <TouchableOpacity style={styleLogin.GoogleLoginButton}>
                 {/* <Image style={styleLogin.Logo} source={require('../Images/google.png')}/>  */}
                 <Text style={styleLogin.ButtonText}>Log In with Google</Text>
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