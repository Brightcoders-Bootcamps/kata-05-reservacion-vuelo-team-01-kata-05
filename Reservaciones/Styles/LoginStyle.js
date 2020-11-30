import {StyleSheet} from 'react-native';
import {Colors} from '../Styles/Colors';

const LoginStyle = StyleSheet.create({
  father: {
    flex: 1,
    padding: 15,
    width: '100%',
  },
  textTittle: {
    color: Colors.blue,
    fontSize: 22,
    fontWeight: 'bold',
    textAlign: 'left',
    marginTop: 25,
    marginBottom: 25,
  },
  inputTittle: {
    marginBottom: 10,
    color: Colors.gray,
  },
  inputText: {
    borderColor: Colors.gray,
    borderWidth: 1,
    height: 48,
    justifyContent: 'center',
    marginBottom: 15,
    color: Colors.black,
  },
  textInputFocus: {
    borderColor: Colors.blue,
    borderWidth: 1,
    flexWrap: 'wrap',
    height: 48,
    justifyContent: 'center',
    marginBottom: 15,
    width: 380,
    color: Colors.black,
  },
  showPass: {
    alignSelf: 'flex-end',
    alignContent: 'flex-end',
    marginRight: 5,
  },
  buttonsArea: {
    marginTop: 40,
    width: '100%',
  },
  googleLoginButton: {
    backgroundColor: Colors.gray,
    borderRadius: 10,
    flexWrap: 'wrap',
    height: 47,
    padding: 20,
  },
  googleLoginButtonBlue: {
    backgroundColor: Colors.blue,
    borderRadius: 10,
    flexWrap: 'wrap',
    height: 47,
    justifyContent: 'center',
    padding: 20,
  },
  googleLogo: {
    position: 'absolute',
    resizeMode: 'contain',
    width: 27,
    marginLeft: 25,
  },
  loginScreenButton: {
    backgroundColor: Colors.gray,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: Colors.white,
    height: 47,
    justifyContent: 'center',
    textAlign: 'center',
  },
  loginScreenButtonBlue: {
    backgroundColor: Colors.blue,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: Colors.white,
    height: 47,
    justifyContent: 'center',
  },
  textContainer: {
    justifyContent: 'center',
    marginTop: 20,
    marginBottom: 30,
    textAlign: 'center',
    width: '100%',
  },
  textStyle: {
    color: Colors.gray,
    fontSize: 16,
    textAlign: 'center',
  },
  loginText: {
    color: Colors.white,
    textAlign: 'center',
    fontWeight: 'bold',
    paddingBottom: 0,
    fontSize: 17,
  },
  searchSection: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Colors.white,
  },
  searchIcon: {
    padding: 10,
  },
  eyeIcon: {
    paddingTop: 44,
    paddingRight: 18,
    position: 'absolute',
    alignSelf: 'flex-end',
  },
  errorLogin: {
    color: Colors.red,
  },
  errorPass: {
    borderColor: Colors.red,
  },
});

export default LoginStyle;
