import React from 'react'
import { Text, View, StyleSheet, Image, Animated } from 'react-native'

export default class AnimationSample extends React.Component {

  state = {
    opacity: new Animated.Value(0), // w state'cie dodajemy np. wlasnosc "opacity", tu: ustawiona na nowy obiekt Animated o domyslnej wartosci 0 (na start)
    width: new Animated.Value(0),
    height: new Animated.Value(0)
  }

  componentDidMount() {
    const { opacity, height, width } = this.state
    // funkcja timing przyjmuje jako argumenty
    // obiekt Animacji o jakiejs wartosci poczatkowej (tu: 0)
    // oraz obiekt o wlasnosciach toValue (czyli na jaka wartosc ma zostac zmieniona wartosc wlasnosci obiektu Animacji)
    // i ile ma trwac ta zmiana (tu: 1000 ms)
    Animated.timing(opacity, { toValue: 1, duration: 1000 }) // animuje to "delikatne" przejscie od wartosci jakiegos stylu do jakiejs innej jego wartosci
      .start() //TO BARDZO WAZNE, BEZ TEGO NIE ZABANGLA xD

    Animated.spring(width, {toValue: 300, speed: 5}).start() // animuje tu "spręzynowe" przejscie od wartosci jakiegos stylu do jakiejs innej jego wartosci
    Animated.spring(height, {toValue: 300, speed: 5}).start()// "sprezynowosc" polega na tym, ze styl zmienia sie od np. 0-120, 120-70, 70-110, 110-80, 80-100
  }

  render() {
    const { opacity, width, height } = this.state
    return (
      <View style={styles.container}>
        <Animated.Image // dopisek Animated sprawia, ze od teraz ten element jest animowany
          style={[styles.img, { opacity, height, width }]} // tutaj nastepuje zmiana stylu dzieki Animacji (to nie musi byc opacity, to moze byc cokolwiek!)
          source={{ uri: 'https://tylermcginnis.com/tylermcginnis_glasses-300.png' }}
        />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  img: {
    width: 200,
    height: 200
  }
})