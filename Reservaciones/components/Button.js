import React, {Component} from 'react';
import {View, Text, TouchableOpacity,Image} from 'react-native';
import PropTypes from 'prop-types';
import styleLogin from '../Styles/LoginStyle';

class ButtonAction extends Component {
  render() {
    const {stateComponent, stateComponentC,title,imageRequired, Press} = this.props;
    return (
      <View style={{flex:1, width: '100%'}}>
        <TouchableOpacity
            style={[stateComponent.userEmail != '' && stateComponent.userPass != ''
            && stateComponent.userFirstName != ''
            && stateComponentC.checkboxAgree != '' && stateComponentC.checkboxSubscribe != '' 

                ? styleLogin.loginScreenButtonBlue
                : styleLogin.loginScreenButton,
            ]}
            onPress={() => {'Hello World'}}>
            {
            imageRequired ?
            <Image
             source={require('../images/google.png')}
             style={styleLogin.googleLogo} /> : null   
            }  
            <Text style={styleLogin.loginText}>{title}</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

ButtonAction.propTypes = {
  imageRequired: PropTypes.bool,
  title: PropTypes.string,
  Press : PropTypes.func,
  stateComponent: PropTypes.object,
  stateComponentC: PropTypes.object

};

export default ButtonAction;


