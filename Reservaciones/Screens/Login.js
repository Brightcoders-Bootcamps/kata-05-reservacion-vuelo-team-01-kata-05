import React, {useState, useEffect, Component} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  Linking,
} from 'react-native';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faEye} from '@fortawesome/free-solid-svg-icons';
import auth from '@react-native-firebase/auth';
import {GoogleSignin} from '@react-native-community/google-signin';
import PropTypes from 'prop-types';
import {Colors} from '../Styles/Colors';
import {Texts} from '../ContentText/Texts';
import styleLogin from '../Styles/LoginStyle';
import Loader from '../Screens/Loader';
import TextField from '../Components/TextField';
import ButtonAction from '../Components/Button'

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
    this.setState({[input]: true});
  };
  handlerBlur = (input,leghtCampo) => {
    if (leghtCampo != '') {
      this.setState({[input]: true});
    } else this.setState({[input]: false});
  };
  handleChangeText = ({input, val}) => {
    this.setState({[input]: val })
  };
  changeShowPass = () => {
    const {isPasswordHidden} = this.state;
    this.setState({isPasswordHidden: !isPasswordHidden});
  };
  async SignInWithEmailPass(email, password) {
    try {
      if (email.trim() === '' && password.trim() === '') {
        alert('Campos vacios');
      } else {
        this.setState({
          loading: true, errorLogin: '',
        });
        await auth().signInWithEmailAndPassword(email, password);
        setTimeout(() => {
          this.setState({
            loading: false,
          });
        }, 2500);
      }
    } catch (error) {
      this.setState({
        errorLogin: 'Incorrect password and/or email',
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
                <View>
                <TextField
                    title={Texts.email}
                    nameHandlerFocus={this.state.Vemail}
                    Hfocus={() => this.handlerFocus(Texts.Pemail)}
                    HBlur={() => this.handlerBlur(Texts.Pemail, this.state.userEmail)}
                    campo= 'userEmail'
                    keyboard = {false}
                    errorLogin=''
                    changeText={this.handleChangeText}
                  />
                </View>
              <View style={styleLogin.eyeContainer}>
                <View>
                  <TextField
                    title={Texts.pass}
                    nameHandlerFocus={this.state.Vpassword}
                    Hfocus={() => this.handlerFocus(Texts.Ppassword)}
                    HBlur={() => this.handlerBlur(Texts.Ppassword,this.state.userPass)}
                    campo='userPass'
                    keyboard = {this.state.isPasswordHidden}
                    errorLogin={this.state.errorLogin}
                    changeText={this.handleChangeText}
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
        <View style={{width: '100%'}}>
          <ButtonAction
                stateComponent = {this.state}
                title={Texts.login}
                imageRequired={false}
                Press = {() => this.SignInWithEmailPass(this.state.userEmail,this.state.userPass)}
            />
        </View>
        <View>
          <Text style={{textAlign: 'center', color: Colors.gray, margin: 10}}>
            {Texts.or}
          </Text>
        </View> 
          <View> 
            <ButtonAction
              stateComponent = {this.state}
              title={Texts.login_with_google}
              imageRequired={true}
              Press = {() => onGoogleButtonPress()}
            />
          </View>
          <Text style={{marginTop: 20, margin: 90, width: '100%'}}>
            <Text style={{color: Colors.gray}}>
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
    );
  }
}

Login.propTypes = {
  name: PropTypes.string,
  loading: PropTypes.bool,
  isPasswordHidden: PropTypes.bool,
  userEmail: PropTypes.string,
  userPass: PropTypes.string,
  errorLogin: PropTypes.string,
  title: PropTypes.string,
  Vemail: PropTypes.string,
  Hfocus:  PropTypes.func,
  HBlur:  PropTypes.func,
  campo: PropTypes.string,
  keyboard : PropTypes.bool,
  errorLogin: PropTypes.string,
  changeText: PropTypes.func,
  imageRequired: PropTypes.bool,
  Press : PropTypes.func
};

export default Login;
