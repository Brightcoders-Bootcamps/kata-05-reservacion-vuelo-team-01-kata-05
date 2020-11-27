import {StyleSheet} from 'react-native';
import {Colors} from '../Styles/Colors';

const myFlightsStyle = StyleSheet.create({

    homePage:{
        backgroundColor: Colors.white,
        height: '100%',
        width: '100%'
    },
    title:{
        color: Colors.blue,
        fontSize: 25,
        fontWeight: 'bold'
    },
    addButton:{
        alignItems: 'center',
        backgroundColor: Colors.blue,
        borderRadius: 100,
       
        padding: 25,
        position: 'absolute',
        left: '40%',
        top: '80%',
        width: '20%',
    },
});

export default myFlightsStyle;