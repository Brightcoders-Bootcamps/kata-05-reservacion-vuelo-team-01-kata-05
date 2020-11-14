import React, {Component} from 'react';
import {View, Text} from 'react-native';
import PropTypes from 'prop-types';


class SignUp extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <View style={{flex:1, width: '100%'}}>
         <Text>Pantalla Sign Up</Text>
      </View>
    );
  }
}

export default SignUp;