import React, {useState, useEffect, Component} from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Linking,
  Image,
} from 'react-native';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faEye} from '@fortawesome/free-solid-svg-icons';
import auth from '@react-native-firebase/auth';
import {GoogleSignin} from '@react-native-community/google-signin';
import {Colors} from '../Styles/Colors';
import {Texts} from '../ContentText/Texts';
import styleLogin from '../Styles/LoginStyle';
import Loader from '../Screens/Loader';

GoogleSignin.configure({
  webClientId:
    '346661789891-e6taibn68bvqogs5h93gs9bgdbt3utlp.apps.googleusercontent.com',
});
async function onGoogleButtonPress() {
  const {idToken} = await GoogleSignin.signIn();
  const googleCredential = auth.GoogleAuthProvider.credential(idToken);
  return auth().signInWithCredential(googleCredential);
}
class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: false,
      isPasswordHidden: true,
      userEmail: '',
      userPass: '',
      errorLogin: '',
    };
  }
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
        alert('Introduzca un email por favor');
      } else if (password.trim() === '') {
        alert('Introduzca un password por favor');
      } else {
        this.setState({
          loading: true,
          errorLogin: '',
        });
        await auth().signInWithEmailAndPassword(email, password);
        setTimeout(() => {
          this.setState({
            loading: false,
          });
        }, 2500);
      }
    } catch (error) {
      const errorMessage = error.message.toString(error);
      this.setState({
        errorLogin: errorMessage,
        loading: false,
      });
    }
  }
  render() {
    return (
      <View style={styleLogin.Father}>
        <Loader loading={this.state.loading} />
        <View>
          <View style={styleLogin.eyeContainer}>
            <View>
              <Text style={styleLogin.TextTittle}>{Texts.logIn}</Text>
              <Text style={styleLogin.InputTittle}>{Texts.email}</Text>
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
                <Text style={styleLogin.InputTittle}>{Texts.pass}</Text>
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
            style={[
              this.state.userEmail.trim() != '' &&
              this.state.userPass.trim() != ''
                ? styleLogin.loginScreenButtonBlue
                : styleLogin.loginScreenButton,
            ]}
            onPress={() =>
              this.SignInWithEmailPass(
                this.state.userEmail,
                this.state.userPass,
              )
            }>
            <Text style={styleLogin.loginText}>{Texts.login}</Text>
          </TouchableOpacity>
          <Text style={{textAlign: 'center', color: Colors.gray, margin: 10}}>
            {Texts.or}
          </Text>
          <TouchableOpacity
            style={[
              this.state.userEmail.trim() != '' &&
              this.state.userPass.trim() != ''
                ? styleLogin.GoogleLoginButtonBlue
                : styleLogin.GoogleLoginButton,
            ]}
            onPress={() =>
              onGoogleButtonPress()
            }>
            <Image
              source={require('../images/google.png')}
              style={styleLogin.googleLogo}
            />
            <Text style={styleLogin.loginText}>{Texts.login_with_google}</Text>
          </TouchableOpacity>
          <Text style={{marginTop: 20}}>
            <Text style={{color: Colors.gray}}>
              {Texts.dont_have_an_account}
            </Text>
            <Text
              style={{color: Colors.blue, textDecorationLine: 'underline'}}
              onPress={() => Linking.openURL('https://www.google.com/')}>
              {Texts.sign_up}
            </Text>
          </Text>
        </View>
      </View>
    );
  }
}

export default Login;
