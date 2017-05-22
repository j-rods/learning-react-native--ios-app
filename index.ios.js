// Import some code we need
import React, { component } from 'react';
import { AppRegistry, Text, View, StyleSheet } from 'react-native';
import DayItem from './src/day-item';

var DAYS = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']


// Create a react component
var Weekdays = React.createClass({
  render: function() {
    return <View style={styles.container}>
      <Text>
        Days of the week:
      </Text>
      <DayItem />
    </View>
  }
});

// Style the React component
var styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center', // now moves stuff height wise
    alignItems: 'center' // now moves stuff width wise
  }
});


// Show the react component on the screen
AppRegistry.registerComponent('weekdays', function() {
  return Weekdays
});