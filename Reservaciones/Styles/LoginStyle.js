import {StyleSheet} from 'react-native';

const LoginStyle = StyleSheet.create({
  Father: {
    flex: 1,
    padding: 15,
    width: '100%',
  },
  TextTittle: {
    color: '#5C6EF8',
    fontSize: 22,
    fontWeight: 'bold',
    textAlign: 'left',
    marginTop: 25,
    marginBottom: 25,
  },
  InputTittle: {
    marginBottom: 10,
    color: '#B6B7BA',
  },
  InputText: {
    borderColor: 'gray',
    borderWidth: 1,
    flexWrap: 'wrap',
    height: 48,
    justifyContent: 'center',
    marginBottom: 15,
    width: 380,
    color: 'black',
  },
  textInputFocus: {
    borderColor: 'blue',
    borderWidth: 1,
    flexWrap: 'wrap',
    height: 48,
    justifyContent: 'center',
    marginBottom: 15,
    width: 400,
    color: 'black',
  },
  ShowPass: {
    alignSelf: 'flex-end',
    alignContent: 'flex-end',
    marginRight: 5,
  },
  ButomsArea: {
    alignItems: 'center',
    color: 'white',
    flex: 1,
    marginTop: 40,
  },
  GoogleLoginButton: {
    backgroundColor: '#B6B7BA',
    borderRadius: 10,
    flexWrap: 'wrap',
    height: 47,
    justifyContent: 'center',
    margin: 10,
    padding: 20,
    width: '100%'
  },
  GoogleLoginButtonBlue: {
    backgroundColor: '#5C6EF8',
    borderRadius: 10,
    flexWrap: 'wrap',
    height: 47,
    justifyContent: 'center',
    margin: 10,
    padding: 20,
    width: '100%'
  },
  loginScreenButton: {
    backgroundColor: '#B6B7BA',
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#fff',
    height: 47,
    justifyContent: 'center',
    marginRight: 40,
    marginLeft: 40,
    marginTop: 10,
    width: '100%',
  },
  loginScreenButtonBlue: {
    backgroundColor: '#5C6EF8',
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#fff',
    height: 47,
    justifyContent: 'center',
    marginRight: 40,
    marginLeft: 40,
    marginTop: 10,
    width: '100%',
  },
  loginText: {
    color: '#fff',
    textAlign: 'center',
    paddingLeft: 10,
    paddingRight: 10,
    fontWeight: 'bold',
  },
  searchSection: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  searchIcon: {
    padding: 10,
  },
  input: {
    paddingTop: 10,
    paddingRight: 10,
    paddingBottom: 10,
    paddingLeft: 0,
    backgroundColor: '#fff',
    color: '#424242',
  },
  eyeIcon: {
    paddingTop: 17,
    paddingRight: 10,
    position: 'absolute',
    alignSelf: 'flex-end',
  },
  googleLogo: {
    height: 30,
    left: 0,
    marginRight: '25%',
    width: 30,

  },
  eyeContainer: {
    flexDirection: 'row',
    // justifyContent: 'center'
  },
  errorLogin:{
    color: 'red',
  },
  errorPass: {
    borderColor: 'red',
    
  }
});

export default LoginStyle;
