import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Ionicons } from '@expo/vector-icons'

export default class App extends React.Component {
  componentDidMount() {
    console.log("Before")

    console.log("After")
  }
  render() {
    return (
      <View style={styles.container}>
        <Ionicons name='ios-pizza' color='red' size='100'/>
        <Text>Open up App.js TOSIA to start working on your app!</Text>
        <Text>Changes you make will automatically reload.</Text>
        <Text>Shake your phone to open the developer menu.</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
