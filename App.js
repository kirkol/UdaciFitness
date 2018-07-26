import React from 'react'
import { StyleSheet, Text, View, Slider } from 'react-native'
import AddEntry from './components/AddEntry'
import { getMetricMetaInfo } from './utils/helpers';
import FormSample from './components/FormSample'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import reducer from './reducers'

const store = createStore(reducer)

export default class App extends React.Component {

  render() {
    return (
      <Provider store={store}>
        <View style={{flex:1}}> {/*widok na 100% ekranu*/}
          <AddEntry />
        </View>
      </Provider>
    );
  }
}

