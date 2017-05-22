// Import some code we need
import React, { component } from 'react';
import { AppRegistry, Text, View, StyleSheet } from 'react-native';


// Create a react component
var Weekdays = React.createClass({
  render: function() {
    return <View style={styles.container}>
      <Text>
        Days of the week:
      </Text>
    </View>
  }
});

// Style the React component
var styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
});


// Show the react component on the screen
AppRegistry.registerComponent('weekdays', function() {
  return Weekdays
});