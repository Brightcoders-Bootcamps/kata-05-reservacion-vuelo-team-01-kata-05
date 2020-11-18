import React, {Component} from 'react';
import {View, Text, TextInput} from 'react-native';
import PropTypes from 'prop-types';
import styleLogin from '../Styles/LoginStyle';

class TextField extends Component {
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
  
  render() {
    const {nameHandlerFocus, Hfocus, HBlur, campo, changeText, title, keyboard, errorLogin} = this.props;
    return (
      <View>
        <View style={{flexDirection: 'row',}}>
            <Text style={styleLogin.InputTittle}>{title}</Text>
            <Text style={styleLogin.errorLogin}>{errorLogin}</Text>
        </View>
        <TextInput
          style={
            nameHandlerFocus ? styleLogin.textInputFocus : styleLogin.InputText
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
  title: PropTypes.string,
  Hfocus:  PropTypes.func,
  HBlur:  PropTypes.func,
  campo: PropTypes.string,
  keyboard : PropTypes.bool,
  errorLogin: PropTypes.string,
  changeText: PropTypes.func
};

export default TextField;
