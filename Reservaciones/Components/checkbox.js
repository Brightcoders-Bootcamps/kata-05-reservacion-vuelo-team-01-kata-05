import CheckBox from '@react-native-community/checkbox';
import React, {useState} from 'react';
import { View, Text } from 'react-native';
import checkboxStyle from '../Styles/checkbox';


const  ComCheckbox = (props) => {
  const [toggleCheckBox, setToggleCheckBox] = useState(false)
  return (
    <>
      <View style={checkboxStyle.container}>
        <View style={checkboxStyle.item}>
          <CheckBox
            disabled={false}
            value={toggleCheckBox}
            boxType={'square'}
            onCheckColor={'white'}
            onFillColor={'#5C6EF8'}
            onTintColor={'#5C6EF8'}
            onValueChange={(newValue) => setToggleCheckBox(newValue)}
          />
        </View>
      </View>
    </>
  ) 
}

export default ComCheckbox;