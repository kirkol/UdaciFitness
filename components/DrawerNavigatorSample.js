import React from 'react'
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native'
import { FontAwesome, Ionicons } from '@expo/vector-icons'
import { createDrawerNavigator } from 'react-navigation'

function Home({navigation}) {
  return (
    <View style={styles.container}>
      <Text >HOME VIEW</Text>
      <TouchableOpacity onPress={() => navigation.openDrawer()}>
        <Text>Open Drawer</Text>
      </TouchableOpacity>
    </View>
  )
}
function Dashboard() {
  return (
    <View style={styles.container}>
      <Text >DASHBOARD</Text>
      <TouchableOpacity onPress={() => navigation.openDrawer()}>
        <Text>Open Drawer</Text>
      </TouchableOpacity>
    </View>
  )
}
const Drawer = createDrawerNavigator({
  Home: {
    screen: Home,
    navigationOptions: {
      drawerLabel: 'Home',
      drawerIcon: () => <FontAwesome name='home' size={20} color='red' />
    }
  },
  Dashboard: {
    screen: Dashboard,
    navigationOptions: {
      drawerLabel: 'Dashboard',
      drawerIcon: () => <FontAwesome name='dashboard' size={20} color='red' />
    }
  }
})
export default class DrawerNavigatorSample extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Drawer />
      </View>
    )
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1
  }
})