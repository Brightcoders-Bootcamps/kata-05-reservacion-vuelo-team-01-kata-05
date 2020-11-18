import React, {Component} from 'react';
import {View, Text, TextInput} from 'react-native';
import SignupStyle from '../Styles/SignupStyle';
import PropTypes from 'prop-types';
import {Texts} from '../ContentText/TextsSignup';
import TextField from '../components/TextField';
import {Colors} from '../Styles/Colors';
import ButtonAction from '../components/Button';
import ComCheckbox from '../components/CheckboxCom';

class Signup extends React.Component{
    constructor(props) { 
        super(props); this.state = {
             loading: false, 
             isPasswordHidden: true, 
             userEmail: '', 
             userPass: '', 
             errorLogin: '',
            };
        }
    render(){
        return(
            <View style={SignupStyle.Father}>
                <Text style={SignupStyle.TextTittle}>{Texts.signup}</Text>
                <TextField 
                    title={Texts.firstname}
                />
                <TextField 
                    title={Texts.email}
                />
                <TextField 
                    title={Texts.pass}
                />
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