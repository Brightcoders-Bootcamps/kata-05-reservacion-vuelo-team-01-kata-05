import {StyleSheet} from 'react-native';
import {Colors} from '../Styles/Colors';

const myFlightsStyle = StyleSheet.create({
  homePage: {
    backgroundColor: Colors.white,
    height: '100%',
    padding: 20,
    paddingBottom: 0,
    width: '100%',
  },
  title: {
    color: Colors.blue,
    fontSize: 25,
    fontWeight: 'bold',
    marginBottom: 15,
  },
  addButton: {
    alignItems: 'center',
    backgroundColor: Colors.blue,
    borderRadius: 100,
    padding: 20,
    position: 'absolute',
    left: '43%',
    top: '87%',
    width: 92,
  },
});

export default myFlightsStyle;
