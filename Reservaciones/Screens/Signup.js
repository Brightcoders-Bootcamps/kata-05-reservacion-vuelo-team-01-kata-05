import React  from 'react';
import {
  View,
  Text,
  TouchableOpacity,
} from 'react-native';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faEye} from '@fortawesome/free-solid-svg-icons';
import auth from '@react-native-firebase/auth';
import {GoogleSignin,statusCodes} from '@react-native-community/google-signin';
import {ScrollView} from 'react-native-gesture-handler';
import PropTypes from 'prop-types';
import {Colors} from '../Styles/Colors';
import {Texts} from '../ContentText/Texts';
import styleLogin from '../Styles/LoginStyle';
import Loader from '../Screens/Loader';
import TextField from '../Components/TextField';
import ButtonAction from '../Components/Button'
import ComCheckbox from '../Components/CheckboxCom'

  GoogleSignin.configure({
    webClientId:
      '346661789891-e6taibn68bvqogs5h93gs9bgdbt3utlp.apps.googleusercontent.com',
  });
  async function onGoogleButtonPress() {
    const {idToken} = await GoogleSignin.signIn();
    const googleCredential = auth.GoogleAuthProvider.credential(idToken);
    return auth().signInWithCredential(googleCredential);
  }

  class Signup extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: false,
      isPasswordHidden: true,
      userFirstName:'',
      userEmail: '',
      userPass: '',
      errorPassword: '',
      errorEmail:'',
      agree: false,
      subscribe: false
    };
  }
  handlerFocus = (input) => {
    this.setState({[input]: true});
  };
  handlerBlur = (input,leghtCampo) => {
    if (leghtCampo != '') {
      this.setState({[input]: true});
    } else this.setState({[input]: false});
  };
  handleChangeText = ({input, val}) => {
    this.setState({[input]: val })
  };
  changeshowPass = () => {
    const {isPasswordHidden} = this.state;
    this.setState({isPasswordHidden: !isPasswordHidden});
  };
  changeCheckAgree = () => {
    const {agree} = this.state;
    this.setState({agree: !agree});
  };
  changeCheckSubscribe = () => {
    const {subscribe} = this.state;
    this.setState({subscribe: !subscribe});
  };
  SignUpWithEmailPass = async () => {
    try {
      if (this.state.userFirstName.trim() ==='' 
        || this.state.userEmail.trim() === '' 
        || this.state.userPass.trim() === '') {
        alert('Campos vacios');
      } else if(this.state.agree === false || this.state.subscribe === false) {
        alert('Debe aceptar terminos y condiciones');
      }else{
        this.setState({
          loading: true, 
          errorPassword: '',
          errorEmail:''
        });
        await auth().
        createUserWithEmailAndPassword(this.state.userEmail, this.state.userPass);
        setTimeout(() => {
          this.setState({
            loading: false,
          });
        }, 1400);
        alert('Se creo exitosamente');
        this.props.navigation.navigate('Login');
      }
    } catch (error) {
      if (error.code === 'auth/email-already-in-use') {
        this.setState({
          errorPassword: 'Incorrect password and/or email',
          errorEmail:'Email in use. Use a different email',
          loading: false,
        });
      }
      if (error.code === 'auth/invalid-email') {
        this.setState({
          errorPassword: 'Incorrect password and/or email',
          errorEmail:'',
          loading: false,
        });
      }
  
    }
  };

  render() {
    return (
      <ScrollView>
        <View style={styleLogin.father}>
          <Loader loading={this.state.loading} text={Texts.signingUp} />
          <View style={styleLogin.eyeContainer}>
            <Text style={styleLogin.textTittle}>{Texts.signUp}</Text>
            <TextField
              title={Texts.firstName}
              nameHandlerFocus={this.state.VFisrtName}
              Hfocus={() => this.handlerFocus(Texts.pFisrtName)}
              HBlur={() => this.handlerBlur(Texts.pFisrtName, this.state.userFirstName)}
              campo= 'userFirstName'
              keyboard = {false}
              errorLogin=''
              changeText={this.handleChangeText}
            />
            <TextField
              title={Texts.email}
              nameHandlerFocus={this.state.Vemail}
              Hfocus={() => this.handlerFocus(Texts.pEmail)}
              HBlur={() => this.handlerBlur(Texts.pEmail, this.state.userEmail)}
              campo= 'userEmail'
              keyboard = {false}
              errorLogin={this.state.errorEmail}
              changeText={this.handleChangeText}
            />
            <View style={styleLogin.eyeContainer}>
              <TextField
                title={Texts.pass}
                nameHandlerFocus={this.state.Vpassword}
                Hfocus={() => this.handlerFocus(Texts.pPassword)}
                HBlur={() => this.handlerBlur(Texts.pPassword,this.state.userPass)}
                campo='userPass'
                keyboard = {this.state.isPasswordHidden}
                errorLogin={this.state.errorPassword}
                changeText={this.handleChangeText}
              />
              <TouchableOpacity
                style={styleLogin.eyeIcon}
                onPressIn={() => this.changeshowPass()}>
                <FontAwesomeIcon icon={faEye} />
              </TouchableOpacity>
            </View>
            <Text style={{color: Colors.gray, fontSize:12}}>{Texts.useCharacteres}</Text>
          </View>
            <View style={{marginTop: 20}}>
              <ComCheckbox
                infoText={Texts.iAgree}
                infoRequire={'*'}
                nameCheck={this.state.agree}
                action={this.changeCheckAgree} 
              />
              <ComCheckbox
                infoText={Texts.subscribe}
                infoRequire={''}
                nameCheck={this.state.subscribe}
                action={this.changeCheckSubscribe} 
              />
            </View>
            <View style={styleLogin.butomsArea}>
            <ButtonAction 
              stateComponent = {this.state}
              title={Texts.signUp}
              imageRequired={false}
              Press = {() => this.SignUpWithEmailPass()}
            />
            <Text style={{textAlign: 'center', color: Colors.gray, margin: 20, marginBottom: 20}}>
              {Texts.or}
            </Text>
            <ButtonAction
              stateComponent = {this.state}
              title={Texts.signUp_with_google}
              imageRequired={true}
              Press = {() => this.onGoogleButtonPress()}
            />
            <View style={{ flex: 1}}>
              <Text style={{textAlign:'center', width: '100%', marginTop:10, fontSize: 16}}>
                <Text style={{color: Colors.gray}}>
                  {Texts.already_have_account}
                </Text>
                <Text
                  style={{color: Colors.blue, textDecorationLine: 'underline'}}
                  onPress={() => this.props.navigation.navigate('Login')}>
                  {Texts.logIn}
                </Text>
              </Text>
            </View>
          </View>
        </View>
      </ScrollView>
    );
  }
}

Signup.propTypes = {
  name: PropTypes.string,
  loading: PropTypes.bool,
  isPasswordHidden: PropTypes.bool,
  errorLogin: PropTypes.string,
  title: PropTypes.string,
  nameHandlerFocus: PropTypes.object,
  Vemail: PropTypes.string,
  Hfocus:  PropTypes.func,
  HBlur:  PropTypes.func,
  campo: PropTypes.string,
  keyboard : PropTypes.bool,
  errorLogin: PropTypes.string,
  changeText: PropTypes.func,
  imageRequired: PropTypes.bool,
  Press : PropTypes.func
};

export default Signup;
