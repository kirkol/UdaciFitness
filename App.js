import React from 'react'
import { StyleSheet, Text, View, Slider } from 'react-native'
import AddEntry from './components/AddEntry'
import { getMetricMetaInfo } from './utils/helpers';
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import reducer from './reducers'
import History from './components/History'
import TabSample from './components/TabSample';

const store = createStore(reducer)

export default class App extends React.Component {

  render() {
    return (
      <Provider store={store}>
        <TabSample/>
        
      </Provider>
    );
  }
}

//<View style={{ flex: 1 }}> {/*widok na 100% ekranu*/}
//          <View style={{ height: 20 }} />
//          <History />
//        </View>