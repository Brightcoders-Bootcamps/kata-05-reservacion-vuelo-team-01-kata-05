import React, {useState, useEffect, Component} from 'react';
import {View, Text, TouchableOpacity, Alert} from 'react-native';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faEye} from '@fortawesome/free-solid-svg-icons';
import auth from '@react-native-firebase/auth';
import {GoogleSignin} from '@react-native-community/google-signin';
import PropTypes from 'prop-types';
import {Colors} from '../Styles/Colors';
import {Texts} from '../ContentText/Texts';
import styleLogin from '../Styles/LoginStyle';
import Loader from '../Screens/Loader';
import TextField from '../components/TextField';
import ButtonAction from '../components/Button';

GoogleSignin.configure({
  webClientId:
    '346661789891-e6taibn68bvqogs5h93gs9bgdbt3utlp.apps.googleusercontent.com',
});

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
    this.setState({[input]: true});
  };
  handlerBlur = (input, leghtCampo) => {
    if (leghtCampo != '') {
      this.setState({[input]: true});
    } else this.setState({[input]: false});
  };
  handleChangeText = ({input, val}) => {
    this.setState({[input]: val});
  };
  changeShowPass = () => {
    const {isPasswordHidden} = this.state;
    this.setState({isPasswordHidden: !isPasswordHidden});
  };
  async SignInWithEmailPass() {
    try {
      if (
        this.state.userEmail.trim() === '' ||
        this.state.userPass.trim() === ''
      ) {
        Alert.alert('Error:', 'Fill all the fields to continue');
      } else {
        this.setState({
          loading: true,
          errorLogin: '',
        });
        await auth().signInWithEmailAndPassword(
          this.state.userEmail,
          this.state.userPass,
        );
        setTimeout(() => {
          this.setState({
            loading: false,
          });
        }, 1800);
        this.props.navigation.navigate('HomeFlights');
      }
    } catch (error) {
      this.setState({
        errorLogin: 'Incorrect password and/or email',
        loading: false,
      });
    }
  }
  async onGoogleButtonPress() {
    this.setState({loading: true, errorLogin: ''});
    const {idToken} = await GoogleSignin.signIn();
    const googleCredential = auth.GoogleAuthProvider.credential(idToken);
    this.setState({loading: false});
    this.props.navigation.navigate('HomeFlights');
    return auth().signInWithCredential(googleCredential);
  }
  render() {
    return (
      <View style={styleLogin.father}>
        <Loader loading={this.state.loading} text={Texts.LoggingIn} />
        <View>
          <View style={styleLogin.eyeContainer}>
            <Text style={styleLogin.textTittle}>{Texts.logIn}</Text>
            <View>
              <TextField
                title={Texts.email}
                nameHandlerFocus={this.state.Vemail}
                Hfocus={() => this.handlerFocus(Texts.pEmail)}
                HBlur={() =>
                  this.handlerBlur(Texts.pEmail, this.state.userEmail)
                }
                campo="userEmail"
                keyboard={false}
                errorLogin=""
                changeText={this.handleChangeText}
              />
            </View>
            <View style={styleLogin.eyeContainer}>
              <View>
                <TextField
                  title={Texts.pass}
                  nameHandlerFocus={this.state.Vpassword}
                  Hfocus={() => this.handlerFocus(Texts.pPassword)}
                  HBlur={() =>
                    this.handlerBlur(Texts.pPassword, this.state.userPass)
                  }
                  campo="userPass"
                  keyboard={this.state.isPasswordHidden}
                  errorLogin={this.state.errorLogin}
                  changeText={this.handleChangeText}
                />
              </View>
              <TouchableOpacity
                style={styleLogin.eyeIcon}
                onPressIn={() => this.changeShowPass()}>
                <FontAwesomeIcon icon={faEye} />
              </TouchableOpacity>
            </View>
          </View>
        </View>
        <View style={styleLogin.buttonsArea}>
          <ButtonAction
            stateComponent={this.state}
            title={Texts.login}
            imageRequired={false}
            Press={() => this.SignInWithEmailPass()}
          />
          <View style={styleLogin.textContainer}>
            <Text style={styleLogin.textStyle}>{Texts.or}</Text>
          </View>
          <ButtonAction
            stateComponent={this.state}
            title={Texts.login_with_google}
            imageRequired={true}
            Press={() => this.onGoogleButtonPress()}
          />
          <View style={styleLogin.textContainer}>
            <Text style={styleLogin.textStyle}>
              <Text style={styleLogin.textStyle}>
                {Texts.dont_have_an_account}
              </Text>
              <Text
                style={{color: Colors.blue, textDecorationLine: 'underline'}}
                onPress={() => this.props.navigation.navigate('SignUp')}>
                {Texts.sign_up}
              </Text>
            </Text>
          </View>
        </View>
      </View>
    );
  }
}

Login.propTypes = {
  userEmail: PropTypes.string,
  userPass: PropTypes.string,
  name: PropTypes.string,
  loading: PropTypes.bool,
  isPasswordHidden: PropTypes.bool,
  errorLogin: PropTypes.string,
  title: PropTypes.string,
  nameHandlerFocus: PropTypes.string,
  Vemail: PropTypes.string,
  Hfocus: PropTypes.func,
  HBlur: PropTypes.func,
  campo: PropTypes.string,
  keyboard: PropTypes.bool,
  errorLogin: PropTypes.string,
  changeText: PropTypes.func,
  imageRequired: PropTypes.bool,
  Press: PropTypes.func,
};

export default Login;
