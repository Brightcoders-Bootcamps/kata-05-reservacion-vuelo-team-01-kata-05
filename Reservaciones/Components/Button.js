import React, {Component} from 'react';
import {View, Text, TouchableOpacity,Image} from 'react-native';
import PropTypes from 'prop-types';
import styleLogin from '../Styles/LoginStyle';


class ButtonAction extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    const {stateComponent,title,imageRequired, Press} = this.props;
    return (
      <View style={{flex:1, width: '100%'}}>
        <TouchableOpacity
            style={[stateComponent.userEmail != '' && stateComponent.userPass != ''
                ? styleLogin.loginScreenButtonBlue
                : styleLogin.loginScreenButton,
            ]}
            onPress={() => Press()}>
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
  Press : PropTypes.func
};

export default ButtonAction;


