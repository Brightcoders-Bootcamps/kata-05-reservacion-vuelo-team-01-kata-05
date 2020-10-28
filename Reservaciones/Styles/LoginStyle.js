import {  StyleSheet } from 'react-native';

const LoginStyle = StyleSheet.create({
    Father:{
        flex:1,
        padding: 15,
        width: '100%',
    },
    TextTittle:{
        color: '#5974F5',
        fontSize: 22,
        fontWeight: 'bold',
        textAlign: 'left',
        marginTop: 25,
        marginBottom: 25, 
    },
    InputTittle: {
        marginBottom: 10,
    },
    InputText: {
        borderColor: 'gray', 
        borderWidth: 1,
        flexWrap: 'wrap', 
        height: 40,
        justifyContent: 'center',
        marginBottom: 15,
        width: '100%' ,
    },
    ShowPass:{
        alignSelf: 'flex-end',
        alignContent: 'flex-end',
        marginRight: 5,
    },
    ButomsArea:{
        alignItems: 'center',
        color: 'white',
        flex:1,
        marginTop: 20,
        
    }, 
    Buttons: {
        backgroundColor: '#B6B7BA',
        borderRadius: 10, 
        height: 25,
        justifyContent: 'center',
        margin: 10,
        padding: 20,
        width: 300,
    },
    GoogleLoginButton: {
        backgroundColor: '#B6B7BA',
        borderRadius: 10,
        flexWrap: 'wrap', 
        height: 25,
        justifyContent: 'center',
        margin: 10,
        padding: 20,
        width: 300,
    },
    ButtonText: {
        color: 'white',
        textAlign: 'center',
    },

  });

  export default LoginStyle;