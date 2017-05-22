// import some code we need
import React, { component } from 'react';
import { Text, StyleSheet } from 'react-native';


// create our component
var DayItem = React.createClass({
  render: function() {
    return <Text style={styles.day}>
      A day of the week
    </Text>
  }
});

// style our component
var styles = StyleSheet.create({
  day: {
    fontSize: 18,
    color: '#000FFF'
  }
});


// make this code available elsewhere
module.exports = DayItem;