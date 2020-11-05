import React, {useState, useEffect, Component} from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Linking,
  Button,
  Image,
} from 'react-native';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faEye} from '@fortawesome/free-solid-svg-icons';
import auth from '@react-native-firebase/auth';
import {GoogleSignin} from '@react-native-community/google-signin';
import styleLogin from '../Styles/LoginStyle';

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
  const [initializing, setInitializing] = useState(true);
  const [user, setUser] = useState();

  function onAuthStateChanged(user) {
    setUser(user);
    if (initializing) setInitializing(false);
  }

  useEffect(() => {
    const subscriber = auth().onAuthStateChanged(onAuthStateChanged);
    return subscriber;
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

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isPasswordHidden: true,
      userEmail: '',
      userPass: '',
      errorLogin: '',
    };
  }

  signOut = () => {
    auth()
      .signOut()
      .then(() => console.log('User signed out!'));
  };

  EmailPassSignIn = () => {
    auth()
      .createUserWithEmailAndPassword(
        'jhon.doe@example.com',
        'SupesssrSecretPassword!',
      )
      .then(() => {
        console.log('User account created & signed in!');
      })
      .catch((error) => {
        if (error.code === 'auth/email-already-in-use') {
          console.log('That email address is already in use!');
        }
        if (error.code === 'auth/invalid-email') {
          console.log('That email address is invalid!');
        }
        console.error(error);
      });
  };

  handlerFocus = (input) => {
    this.setState({
      [input]: true,
    });
  };
  handlerBlur = (input) => {
    let leghtEmail = this.state.userEmail;
    if (leghtEmail.trim() === '') {
      this.setState({
        [input]: false,
      });
    } else {
      this.setState({
        [input]: true,
      });
    }
  };

  changeShowPass = () => {
    const {isPasswordHidden} = this.state;
    this.setState({isPasswordHidden: !isPasswordHidden});
  };

  async SignInWithEmailPass(email, password) {
    try {
      if (email.trim() === '') {
        alert('Indtroduzca un email por favor');
      } else if (password.trim() === '') {
        alert('Indtroduzca un password por favor');
      } else {
        await auth().signInWithEmailAndPassword(email, password);
        alert('entro por email y pass');
        //await auth().onAuthStateChanged(user => {  alert(user.email);  })
      }
    } catch (error) {
      let errorMessage = e.message.toString(e);
      this.setState({errorLogin: errorMessage});
    }
  }

  render() {
    return (
      <View style={styleLogin.Father}>
        <View>
          <View style={styleLogin.eyeContainer}>
            <View>
              <Text style={styleLogin.TextTittle}>Log In</Text>
              <Text style={styleLogin.InputTittle}>Email * </Text>

              <TextInput
                style={[
                  styleLogin.InputText,
                  this.state.nameInputOneFocus
                    ? styleLogin.textInputFocus
                    : styleLogin.InputText,
                ]}
                onFocus={() => this.handlerFocus('nameInputOneFocus')}
                onBlur={() => this.handlerBlur('nameInputOneFocus')}
                keyboardType={'email-address'}
                onChangeText={(val) => this.setState({userEmail: val})}
              />

              <View style={{flexDirection: 'row'}}>
                <Text style={styleLogin.InputTittle}>Password *</Text>
                <Text style={styleLogin.errorLogin}>
                  {this.state.errorLogin}
                </Text>
              </View>

              <View style={styleLogin.eyeContainer}>
                <View>
                  
                  <TextInput
                    secureTextEntry={this.state.isPasswordHidden}
                    style={[
                      styleLogin.InputText,
                      this.state.nameInputTwoFocus
                        ? styleLogin.textInputFocus
                        : styleLogin.InputText,
                    ]}
                    onFocus={() => this.handlerFocus('nameInputTwoFocus')}
                    onBlur={() => this.handlerBlur('nameInputTwoFocus')}
                    onChangeText={(val) => this.setState({userPass: val})}
                  />

                  <TouchableOpacity
                    style={styleLogin.eyeIcon}
                    onPressIn={() => this.changeShowPass()}>
                    <FontAwesomeIcon icon={faEye} />
                  </TouchableOpacity>
                </View>
              </View>
            </View>
          </View>
        </View>

        <View style={styleLogin.ButomsArea}>
          
          <TouchableOpacity
            style={[this.state.userEmail.trim()!='' && this.state.userPass.trim()!='' 
                    ? styleLogin.loginScreenButtonBlue 
                    : styleLogin.loginScreenButton 
                  ]}
            underlayColor="#fff"
            onPress={() =>
              this.SignInWithEmailPass(
                this.state.userEmail,
                this.state.userPass,
              )
            }
            >
            <Text style={styleLogin.loginText}>Login</Text>
          </TouchableOpacity>
          
          <Text style={{textAlign: 'center', color: '#B6B7BA', margin: 10}}>
            or
          </Text>

          <TouchableOpacity
            style={[this.state.userEmail.trim()!='' && this.state.userPass.trim()!='' 
                    ? styleLogin.GoogleLoginButtonBlue 
                    : styleLogin.GoogleLoginButton 
                  ]}
            underlayColor="#fff"
            onPress={() =>
              onGoogleButtonPress().then(() =>
                console.log('Signed in with Google!'),
              )
            }
            >
              <Image 
                source={require('../images/google.png')}
                style={styleLogin.googleLogo}
              />
            <Text style={styleLogin.loginText}> 
              Login with Google
            </Text>
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
          <Button title="Sign Out" onPress={() => this.signOut()} />
        </View>
      </View>
    );
  }
}

export default Login;
