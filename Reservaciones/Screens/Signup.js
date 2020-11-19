import React, {Component} from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faEye} from '@fortawesome/free-solid-svg-icons';
import PropTypes from 'prop-types';
import {Texts} from '../ContentText/TextsSignup';
import TextField from '../components/TextField';
import ButtonAction from '../components/Button';
import ComCheckbox from '../components/CheckboxCom';
import {Colors} from '../Styles/Colors';
import styleLogin from '../Styles/LoginStyle';
import SignupStyle from '../Styles/SignupStyle';





class Signup extends React.Component{
  constructor(props) { 
    super(props); this.state = {
      loading: false, 
      isPasswordHidden: true, 
      userEmail: '', 
      userPass: '', 
      errorLogin: '',
      userFirstName: '',
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
  checkboxChangeState = () => {
    this.setState({[input]: true});
  };
  

    render(){
      return(
        <View style={SignupStyle.Father}>
          <Text style={SignupStyle.TextTittle}>{Texts.signup}</Text>
          <TextField
            title={Texts.firstname}
            nameHandlerFocus={this.state.Vfirstname}
            Hfocus={() => this.handlerFocus(Texts.Pfirstname)}
            HBlur={() => this.handlerBlur(Texts.Pfirstname, this.state.userFirstName)}
            campo= 'userFirstName'
            keyboard = {false}
            errorLogin=''
            changeText={this.handleChangeText}
          />
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
          <TextField
            title={Texts.pass}
            nameHandlerFocus={this.state.Vpassword}
            Hfocus={() => this.handlerFocus(Texts.Ppassword)}
            HBlur={() => this.handlerBlur(Texts.Ppassword, this.state.userPass)}
            campo= 'userPass'
            keyboard = {this.state.isPasswordHidden}
            errorLogin={this.state.errorLogin}
            changeText={this.handleChangeText}
          />
          <TouchableOpacity
            style={styleLogin.eyeIcon}
            onPressIn={() => this.changeShowPass()}>
            <FontAwesomeIcon icon={faEye} />
          </TouchableOpacity>
          <Text style={{color: Colors.gray, fontSize: 13}}>{Texts.useText}</Text>
          <ComCheckbox
            innerText={Texts.checkbox1}
            textRequire={true}
          />
          <ComCheckbox
            innerText={Texts.checkbox2}
          />
          <View style={{marginTop: 40}}>
            <ButtonAction 
              stateComponent = {this.state} 
              title={Texts.signup} 
              imageRequired={false} 
            />
          </View>
          <Text style={{color: Colors.gray, marginTop: 70, textAlign: 'center'}}>{Texts.or}</Text>
          <View style={{marginTop: 20}}>
            <ButtonAction 
              stateComponent = {this.state} 
              title={Texts.signup_with_google} 
              imageRequired={true} 
            />
          </View>    
          <Text style={{marginTop: 80, margin: 90, width: '100%'}}>
            <Text style={{color: Colors.gray}}>
              {Texts.already_have_an_account}
            </Text>
            <Text
              style={{color: Colors.blue, textDecorationLine: 'underline'}}
              onPress={() => console.log('Pressed')}>
            {Texts.logIn}
            </Text>
          </Text>
        </View>    
      );
    }
}

Signup.propTypes = {
    name: PropTypes.string,
    loading: PropTypes.bool,
    isPasswordHidden: PropTypes.bool,
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
    Press: PropTypes.func,
    innerText: PropTypes.string,
    textRequire: PropTypes.func,
  };

export default Signup;