import React from 'react'
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native'
import { FontAwesome, Ionicons } from '@expo/vector-icons'
import { createStackNavigator } from 'react-navigation';

function Home({navigation}) {
  return (
    <View style={styles.container}>
      <Text >HOME VIEW</Text>
      <TouchableOpacity onPress={() => navigation.navigate('Dashboard')}>
        <Text>To Dashboard</Text>
      </TouchableOpacity>
    </View>
  )
}
function Dashboard() {
  return (
    <View style={styles.container}>
      <Text >DASHBOARD</Text>
    </View>
  )
}

const Stack = createStackNavigator({
  Home: {
    screen: Home,
    navigationOptions: {
      title: "Home"
    }
  },
  Dashboard: {
    screen: Dashboard,
    navigationOptions: {
      title: "Dashboard",
      headerTintColor: 'red',
      headerStyle: {
        backgroundColor: 'green'
      }
    }
  }
})

export default class StackNavigatorSample extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Stack />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
})