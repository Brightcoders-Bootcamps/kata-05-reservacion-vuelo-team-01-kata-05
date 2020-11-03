import React, {useState, useEffect} from 'react';
import {
   View,
   Text,
   TextInput,
   TouchableOpacity,
   Linking,
   Button,
} from 'react-native';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faEye} from '@fortawesome/free-solid-svg-icons';
import auth from '@react-native-firebase/auth';
import {GoogleSignin} from '@react-native-community/google-signin';
import styleLogin from '../Styles/LoginStyle';
import {GoogleSocialButton} from 'react-native-social-buttons';

GoogleSignin.configure({
  webClientId:
    '346661789891-e6taibn68bvqogs5h93gs9bgdbt3utlp.apps.googleusercontent.com',
});

async function onGoogleButtonPress() {
  const {idToken} = await GoogleSignin.signIn();
  const googleCredential = auth.GoogleAuthProvider.credential(idToken);
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
  const [isPasswordHidden, setIsPasswordHidden] = useState(true);
  const [isActive, setIsActive] = useState(false);
  const customStyleFocus = isActive
    ? styleLogin.textInputFocus
    : styleLogin.InputText;
  const signOut = () => {
    auth()
      .signOut()
      .then(() => console.log('User signed out!'));
  };

//this is for the email-pass functionality
  const [ email, setEmail ] = useState('');
  const [ password, setPassword ] = useState('');

  const Login = () =>{
    console.log('Pressed');
  }
  

  const EmailPassSignIn = () => {

    auth()
      .createUserWithEmailAndPassword('jhon.doe@example.com', 'SupesssrSecretPassword!')
      .then(() => {
        console.log('User account created & signed in!');
      })
      .catch(error => {
        if (error.code === 'auth/email-already-in-use') {
          console.log('That email address is already in use!');
        }

        if (error.code === 'auth/invalid-email') {
          console.log('That email address is invalid!');
        }

        console.error(error);
      });
  }
  
  return (
    <View style={styleLogin.Father}>
      <View>
        <Text style={styleLogin.TextTittle}>Log In</Text>
        <Text style={styleLogin.InputTittle}>Email * </Text>
        <TextInput 
            onFocus={() => setIsActive(true)}
            onBlur={() => setIsActive(false)}
            style={customStyleFocus} 
         />
        <Text style={styleLogin.InputTittle}>Password *</Text>
        <View style={styleLogin.eyeContainer}>
          <View>
            <TextInput
              secureTextEntry={isPasswordHidden}
              onFocus={() => setIsActive(true)}
              onBlur={() => setIsActive(false)}
              style={customStyleFocus}
            />
            <TouchableOpacity
              style={styleLogin.eyeIcon}
              onPressIn={() => setIsPasswordHidden(!isPasswordHidden)}>
              <FontAwesomeIcon icon={faEye} />
            </TouchableOpacity>
          </View>
        </View>
      </View>
      <View style={styleLogin.ButomsArea}>
        <TouchableOpacity
          style={styleLogin.loginScreenButton}
          underlayColor="#fff"
          onPress={EmailPassSignIn}>
          <Text style={styleLogin.loginText}>Login</Text>
        </TouchableOpacity>
        <Text style={{textAlign: 'center', color: '#B6B7BA', margin: 10}}>
          or
        </Text>
        <TouchableOpacity>
          <GoogleSocialButton
            onPress={() =>
              onGoogleButtonPress().then(() =>
                console.log('Signed in with Google!'),
              )
            }
          />
        </TouchableOpacity>
        <Text style={{marginTop: 20}}>
          <Text style={{color: '#B6B7BA'}}>Don´t have an account? </Text>
          <Text
            style={{color: '#5974F5', textDecorationLine: 'underline'}}
            onPress={() => Linking.openURL('https://www.google.com/')}>
            Sign Up
          </Text>
        </Text>
        <LoginApp />
        <Button title="Sign Out" onPress={() => signOut()} />
      </View>
    </View>
  );
};

export default Login;
