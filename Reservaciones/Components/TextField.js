import React, {Component} from 'react';
import {View, Text, TextInput} from 'react-native';
import PropTypes from 'prop-types';
import styleLogin from '../Styles/LoginStyle';

class TextField extends Component {
  render() {
    const {nameHandlerFocus, Hfocus, HBlur, campo, changeText, title, keyboard, errorLogin} = this.props;
    return (
      <View>
        <View style={{flexDirection: 'row',}}>
            <Text style={styleLogin.inputTittle}>{title}</Text>
            <Text style={styleLogin.errorLogin}>{errorLogin}</Text>
        </View>
        <TextInput
          style={
            nameHandlerFocus ? styleLogin.textInputFocus : styleLogin.inputText
          }
          secureTextEntry = {keyboard}
          onFocus={() => Hfocus()} 
          onBlur={() => HBlur()}
          onChangeText={(val) => changeText({input: campo,val: val})}
        />
      </View>
    );
  }
}

TextField.propTypes = {
  nameHandlerFocus: PropTypes.object,
  title: PropTypes.string,
  Hfocus:  PropTypes.func,
  HBlur:  PropTypes.func,
  campo: PropTypes.string,
  keyboard : PropTypes.bool,
  errorLogin: PropTypes.string,
  changeText: PropTypes.func
};

export default TextField;
