import {   Dimensions, StyleSheet } from 'react-native';

const styleSignUp = StyleSheet.create({  
    Father:{
        flex:1,
        width: '100%',
        marginTop: 30,
    },
    TextTittle:{
        fontSize: 22,
        textAlign: 'left',
        marginBottom: 35, 
        fontWeight: 'bold',
        color: '#5974F5',
    },
    InputTittle: {
       
        marginBottom: 5,
    },
    InputText: {
        borderColor: 'gray', 
        borderWidth: 1, 
        height: 40,
        marginBottom: 15,
        width: '100%' ,
    },
    ButomsArea:{
        marginTop: 50,
        flex:1,
        height:'50%',
        
    }
  });

  export default styleSignUp;