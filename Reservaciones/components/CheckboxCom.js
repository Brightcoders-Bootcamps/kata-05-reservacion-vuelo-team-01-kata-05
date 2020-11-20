import CheckBox from '@react-native-community/checkbox';
import React, {useState} from 'react';
import { View, Text } from 'react-native';
import PropTypes from 'prop-types';
import { Texts } from '../ContentText/TextsSignup';
import {Colors} from '../Styles/Colors';

const checked = () => {
  console.log('Checked');
}

const ClicText = (props) => {
  return (
    <>
      <Text 
        style={{color: Colors.gray, textDecorationLine: 'underline'}}
        onPress={() => console.log('Pressed')}>
        {Texts.terms}
      </Text>
      <Text>{Texts.and}</Text>
      <Text             
        style={{color: Colors.gray, textDecorationLine: 'underline'}}
        onPress={() => console.log('Pressed')}>
        {Texts.pp}
      </Text>
      <Text style={{color: 'red'}}>{Texts.star}</Text>
    </>
    )
}

class ComCheckbox extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      checkboxAgree:'',
      checkboxSubscribe:'',
    };
  }
  render(){
    const { textRequire, innerText, checkboxAgree, checkboxSubscribe} = this.props;
    return (
      <>
        <View style={{flexDirection: 'row', marginTop: 40} }>
          <CheckBox
            disabled={false}
            value={false}
            boxType={'square'}
            onCheckColor={'white'}
            onFillColor={'#5C6EF8'}
            onTintColor={'#5C6EF8'}
            onChange={checked}
          />
          <Text style={{margin: 8, color: Colors.gray, fontSize: 15}}>
            <Text>{innerText}</Text>
            {textRequire ? <ClicText/> : null }
          </Text>
        </View>
      </>
    ); 
  }
}

ComCheckbox.props = {
    innerText: PropTypes.string,
    textRequire: PropTypes.func,
    checkboxAgree: PropTypes.string,
    checkboxSubscribe: PropTypes.string,
}

export default ComCheckbox;


