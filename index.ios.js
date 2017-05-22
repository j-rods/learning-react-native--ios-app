// Import some code we need
import Moment from 'moment';
import React, { component } from 'react';
import { AppRegistry, Text, View, StyleSheet } from 'react-native';
import DayItem from './src/day-item';



// Create a react component
var Weekdays = React.createClass({
  render: function() {
    return <View style={styles.container}>
      {this.days()}
    </View>
  },
  days: function() {
    var daysItems = [];
    for(var i = 0; i < 7; i++) {
      var day = Moment().add(i, 'days').format('dddd');
      daysItems.push(
        <DayItem day={day} daysUntil={i} />
      )
    }
    return daysItems
  }
});

// Style the React component
var styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center', // now moves stuff height wise
    alignItems: 'center', // now moves stuff width wise
    backgroundColor: '#10A5CA',
  }
});


// Show the react component on the screen
AppRegistry.registerComponent('weekdays', function() {
  return Weekdays
});