import React from 'react'
import { StyleSheet, Switch, TextInput, KeyboardAvoidingView, Image } from 'react-native'

export default class App extends React.Component {
  state = {
    input: '@tylermcginnis',
    showInput: false
  }
  handleToggleSwitch = () => {
    this.setState((state) => ({
      showInput: !state.showInput
    }))
  }

  handleTextChange = (input) => {
    this.setState(() => ({
      input
    }))
  }

  render() {
    const { input, showInput } = this.state

    return (
      <KeyboardAvoidingView behavior='padding' style={styles.container}>
      {/*KeyboardAvoidingView dziala jak View, tylko pozwala na 
      dopasowanie widoku, gdy na ekranie pojawia sie klawiatura*/}
        <Image
          source={{uri: 'https://tylermcginnis.com/tylermcginnis_glasses-300.png'}}
          style={styles.img}
        />
        <Switch
          value={showInput}
          onValueChange={this.handleToggleSwitch}
        />

        {showInput === true && (
          <TextInput
            value={input}
            style={styles.input}
            onChangeText={this.handleToggleSwitch}
          />
        )}
      </KeyboardAvoidingView>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: 25,
    backgroundColor: '#ecf0f1'
  },
  input: {
    width: 200,
    height: 44,
    padding: 8,
    borderWidth: 1,
    borderColor: '#757575',
    margin: 50
  },
  img: {
    width: 100,
    height: 100,
    margin: 50
  }
})