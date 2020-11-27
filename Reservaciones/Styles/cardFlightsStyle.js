import {StyleSheet} from 'react-native';
import {Colors} from '../Styles/Colors';

const CardFligthStyle = StyleSheet.create({
  container: {
    backgroundColor: Colors.white,
    borderBottomColor: Colors.black,
    borderBottomWidth: 2,
    flexDirection: 'row',
    justifyContent: 'space-between',
    margin: 10
  },
  leftSide: {
    alignItems: 'flex-start',
    width: '40%',
  },
  rightSide: {
    alignItems: 'flex-end',
    width: '40%',
  },
  firstRow: {
    color: Colors.black,
    fontSize: 25,
    fontWeight: 'bold',
  },
  secondRow: {
    color: Colors.gray,
    fontSize: 15,
    paddingBottom: 10,
  },
  thirdRow: {
    color: Colors.black,
    fontSize: 15,
    fontWeight: 'bold',
    paddingTop: 5,
    paddingBottom: 15,
  },
  image: {
    alignContent: 'center',
    marginTop: 15,
  },
  grayline: {
    alignSelf: 'center',
    borderBottomColor: Colors.gray,
    borderBottomWidth: 1,
    direction: 'inherit',
    top: 60,
    position: 'absolute',
    width: '100%',
  },
});

export default CardFligthStyle;