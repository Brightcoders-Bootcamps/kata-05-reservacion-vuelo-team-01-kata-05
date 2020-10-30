
import React, { useState, useEffect } from 'react';
import styleLogin from '../Styles/LoginStyle';
import { GoogleSocialButton } from "react-native-social-buttons";
import { View, Text, TextInput, TouchableOpacity, Linking, Button} from 'react-native';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faEye } from '@fortawesome/free-solid-svg-icons'
import auth from '@react-native-firebase/auth';
import { GoogleSignin } from '@react-native-community/google-signin';

GoogleSignin.configure({
  webClientId: '346661789891-e6taibn68bvqogs5h93gs9bgdbt3utlp.apps.googleusercontent.com',
});

async function onGoogleButtonPress() {
   // Get the users ID token
   const { idToken } = await GoogleSignin.signIn();
 
   // Create a Google credential with the token
   const googleCredential = auth.GoogleAuthProvider.credential(idToken);
 
   // Sign-in the user with the credential
   return auth().signInWithCredential(googleCredential);
 }

function LoginApp() {
   // Set an initializing state whilst Firebase connects
   const [initializing, setInitializing] = useState(true);
   const [user, setUser] = useState();
 
   // Handle user state changes
   function onAuthStateChanged(user) {
     setUser(user);
     if (initializing) setInitializing(false);
   }
 
   useEffect(() => {
     const subscriber = auth().onAuthStateChanged(onAuthStateChanged);
     return subscriber; // unsubscribe on unmount
   }, []);
 
   if (initializing) return null;
 
   if (!user) {
     return (
       <View>
         <Text>Login principal</Text>
       </View>
     );
   }
 
   return (
     <View>
       <Text>Bienvenido {user.email}</Text>
     </View>
   );
 }

const Login = () => {
   const [isHidden, setIsHidden] = useState(true);


  cerrarsesion = () => {
   auth()
   .signOut()
   .then(() => console.log('User signed out!'));
  }

   return (

      <View style={styleLogin.Father}>
        
        <View>
            <Text style={styleLogin.TextTittle}>Log In</Text>
            <Text style={styleLogin.InputTittle}>Email * </Text>   
            <TextInput style={styleLogin.InputText}/>
            <Text style={styleLogin.InputTittle}>Password *</Text>
            <View style={styleLogin.eyeContainer}>  
               <View>
                  <TextInput 
                     secureTextEntry={isHidden}
                     style={styleLogin.InputText} 
                  />
                  <TouchableOpacity
                  style={styleLogin.eyeIcon}
                  onPressIn={() => setIsHidden(!isHidden)}>
                     <FontAwesomeIcon icon={ faEye } />
                  </TouchableOpacity>
               </View>
            </View>
        </View>
         <View style={styleLogin.ButomsArea}>
            <TouchableOpacity
               style={styleLogin.loginScreenButton}
               underlayColor='#fff'>
               <Text style={styleLogin.loginText}>Login</Text>
         </TouchableOpacity>
            <Text style={{textAlign: 'center', color:'#B6B7BA', margin: 10}}>or</Text>
            <TouchableOpacity
            >
               <GoogleSocialButton
               onPress={() => onGoogleButtonPress().then(() => console.log('Signed in with Google!'))} />
            </TouchableOpacity>
            <Text style={{marginTop: 20}}>
               <Text style={{color: '#B6B7BA'}}>Don´t have an account? </Text>
               <Text style={{color: '#5974F5', textDecorationLine: 'underline'}} 
		         onPress={ ()=> Linking.openURL('https://www.google.com/') }>Sign Up</Text>    
            </Text>
            <LoginApp/>
            <Button
            title= 'Cerrar sesion'
            onPress = {() => cerrarsesion()}/>
         </View>
      </View>
   );
}

export default Login;