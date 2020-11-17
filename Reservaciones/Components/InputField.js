import { View,  Text, TextInput } from "react-native";
import React, {useState, useEffect, Component} from 'react';
import styleLogin from '../Styles/LoginStyle';
import {Texts} from '../ContentText/Texts';

export default  InputField = () => {
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
  <View>
    <Text style={styleLogin.inputTittle}>{Texts.email}</Text>
    <TextInput
      style={[
        styleLogin.inputText,
        this.state.nameInputOneFocus
        ? styleLogin.textInputFocus
        : styleLogin.inputText,
      ]}
      onFocus={() => this.handlerFocus('nameInputOneFocus')}
      onBlur={() => this.handlerBlur('nameInputOneFocus')}
      keyboardType={'email-address'}
      onChangeText={(val) => this.setState({userEmail: val})}
    />
  </View>
}

