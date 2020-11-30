import React, {Component} from 'react';
import {Image, ScrollView, Text, TouchableOpacity, View} from 'react-native';
import myFlightsStyle from '../Styles/FlightsStyle';
import CardFlights from '../components/CardMyFlights';
export default class myFlights extends Component {
  render() {
    return (
      <View style={myFlightsStyle.homePage}>
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
          <Image source={require('../Images/plus.png')} />
        </TouchableOpacity>
      </View>
    );
  }
}
