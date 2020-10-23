import React, { useState } from 'react';
import CheckBox from '@react-native-community/checkbox';
import styleLogin from '../styles/LogInStyle';
import { View, Text, TextInput, TouchableOpacity, Linking  } from 'react-native';


const SignUp = () => {
    const [toggleCheckBox, setToggleCheckBox] = useState(false)


   return (
    <View style={styleLogin.Father}>
        <Text style={styleLogin.TextTittle}>Sign Up</Text>
        <Text style={styleLogin.InputTittle}>First Name </Text>   
        <TextInput style={styleLogin.InputText}/>
        <Text style={styleLogin.InputTittle}>Email *</Text>
        <TextInput style={styleLogin.InputText}/>
        <Text style={styleLogin.InputTittle}>Password *</Text>
        <TextInput style={styleLogin.InputText}/>
        <Text style={styleLogin.InputTittle}>Use 8 or more characters with a mix of letters,
        numbers and symbols</Text>
        <Text>Checkbox1</Text>
        <CheckBox
            disabled={false}
            value={toggleCheckBox}
            boxType={'square'}
        />
        <Text>Checkbox1</Text>
        <CheckBox
            disabled={false}
            value={toggleCheckBox}
            boxType={'square'}
        />

        <View style={styleLogin.ButomsArea}>
        
        <TouchableOpacity style={styleLogin.Buttons}> 
            <Text style={styleLogin.ButtonText}>Log In </Text>
        </TouchableOpacity>
        
        <Text style={{textAlign: 'center', color:'#B6B7BA'}}>or</Text>
        
        <TouchableOpacity style={styleLogin.Buttons}> 
            <Text style={styleLogin.ButtonText}>Log In with Google</Text>
        </TouchableOpacity>

        <Text style={{color: '#B6B7BA',textAlign: 'center', marginTop: 10, marginBottom: 5}}>Don´t have an account? 
            <Text style={{color: '#5974F5', textDecorationLine: 'underline'}} onPress={ ()=> Linking.openURL('https://google.com') }>Sign Up</Text> 
        </Text>    
        </View>
    </View>
   );
}

export default SignUp;