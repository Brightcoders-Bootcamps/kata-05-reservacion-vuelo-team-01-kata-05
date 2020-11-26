import React from 'react';
import CheckBox from '@react-native-community/checkbox';
import {View, Text} from 'react-native';
import PropTypes from 'prop-types';
import {Colors} from '../Styles/Colors';
class ComCheckbox extends React.Component {
  render(){
    const {infoRequire, infoText,nameCheck,action} = this.props;
    return (
      <View style={{flex: 1, flexDirection: 'row', alignItems:'center', marginTop: 10}}>
        <CheckBox
          value={nameCheck}
          onCheckColor={Colors.white}
          onFillColor={Colors.blue}
          onTintColor={Colors.blue}
          checked={nameCheck}
          onChange={() => action()}
        />
        <View style={{flex: 1,  flexDirection: 'row'}}>
          <Text style={{color: Colors.gray}}>{infoText}</Text>
          <Text style={{color: Colors.red}}>{infoRequire}</Text>
        </View>
      </View>
    ); 
  }
}

ComCheckbox.props = {
  infoRequire: PropTypes.string,
  infoText: PropTypes.string,
  nameCheck: PropTypes.bool,
  action: PropTypes.func,
}

export default ComCheckbox;


