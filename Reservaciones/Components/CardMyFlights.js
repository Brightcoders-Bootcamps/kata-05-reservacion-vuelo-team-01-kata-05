import React, {Component} from 'react';
import {Image, Text, View} from 'react-native';
import CardFligthStyle from '../Styles/cardFlightsStyle';

export default class CardFlights extends Component {
  render() {
    return (
        <View style={CardFligthStyle.container}>
          <View style={CardFligthStyle.leftSide}>
            <Text style={CardFligthStyle.firstRow}>BEG</Text>
            <Text style={CardFligthStyle.secondRow}>Serbia</Text>
            <Text style={CardFligthStyle.thirdRow}>September 3, 2020</Text>
          </View>
          <View style={CardFligthStyle.image}>
            <Image source={require('../Images/blue-plane.png')} />
          </View>
          <View style={CardFligthStyle.grayline} />
          <View style={CardFligthStyle.rightSide}>
            <Text style={CardFligthStyle.firstRow}>AMS</Text>
            <Text style={CardFligthStyle.secondRow}>Netherlands</Text>
            <Text style={CardFligthStyle.thirdRow}>2 Passengers</Text>
          </View>
        </View>
    );
  }
}