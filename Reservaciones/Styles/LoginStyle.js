import {StyleSheet} from 'react-native';
import {Colors} from '../Styles/Colors';

const LoginStyle = StyleSheet.create({
  Father: {
    flex: 1,
    padding: 15,
    width: '100%',
  },
  TextTittle: {
    color: Colors.blue,
    fontSize: 22,
    fontWeight: 'bold',
    textAlign: 'left',
    marginTop: 25,
    marginBottom: 25,
  },
  InputTittle: {
    marginBottom: 10,
    color: Colors.gray,
  },
  InputText: {
    borderColor: Colors.gray,
    borderWidth: 1,
    flexWrap: 'wrap',
    height: 48,
    justifyContent: 'center',
    marginBottom: 15,
    width: 380,
    color: Colors.black,
  },
  textInputFocus: {
    borderColor: Colors.blue,
    borderWidth: 1,
    flexWrap: 'wrap',
    height: 48,
    justifyContent: 'center',
    marginBottom: 15,
    width: 400,
    color: Colors.black,
  },
  ShowPass: {
    alignSelf: 'flex-end',
    alignContent: 'flex-end',
    marginRight: 5,
  },
  ButomsArea: {
    alignItems: 'center',
    color: Colors.white,
    flex: 1,
    marginTop: 40,
  },
  GoogleLoginButton: {
    backgroundColor: Colors.gray,
    borderRadius: 10,
    flexWrap: 'wrap',
    height: 47,
    justifyContent: 'center',
    margin: 10,
    padding: 20,
    width: '100%',
  },
  loginScreenButton: {
    backgroundColor: Colors.gray,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: Colors.white,
    height: 47,
    justifyContent: 'center',
    alignContent: 'center',
    textAlign: 'center',
    marginRight: 40,
    marginLeft: 40,
    marginTop: 10,
  },
  loginScreenButtonBlue: {
    backgroundColor: Colors.blue,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: Colors.white,
    height: 47,
    justifyContent: 'center',
    marginRight: 40,
    marginLeft: 40,
    marginTop: 10,
  },
  loginText: {
    color: Colors.white,
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
    backgroundColor: Colors.white,
  },
  searchIcon: {
    padding: 10,
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
  },
  errorLogin: {
    color: Colors.red,
  },
  errorPass: {
    borderColor: Colors.red,
  },
});

export default LoginStyle;
