import React, {Component} from 'react';
import {Image, ScrollView, Text, TouchableOpacity, View} from 'react-native';
import myFlightsStyle from '../Styles/FlightsStyle';
import Texts from '../ContentText/Texts';
import CardFlights from '../Components/CardMyFlights';
export default class myFlights extends Component {
  render() {
    return (
      <View style={{marginTop: 20}}>
        <Text style={myFlightsStyle.title}>My Flights</Text>
        <ScrollView>
          <CardFlights />
          <CardFlights />
          <CardFlights />
          <CardFlights />
          <CardFlights />
          <CardFlights />
          <CardFlights />
          <CardFlights />
          <CardFlights />
          <CardFlights />
          <CardFlights />
          <CardFlights />
          <CardFlights />
          <CardFlights />
        </ScrollView>
        <TouchableOpacity style={myFlightsStyle.addButton}>
          <Image style={{height:20, width:20}}  source={require('../Images/plus.png')} />
        </TouchableOpacity>
      </View>
    );
  }
}