import React, {Component} from 'react';
import {View, Text, TouchableOpacity,Image} from 'react-native';
import styleLogin from '../Styles/LoginStyle';
import {Texts} from '../ContentText/Texts';

class ButtonAction extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    const {stateComponent,title,imageRequired, Press} = this.props;
    return (
      <View>
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

export default ButtonAction;


