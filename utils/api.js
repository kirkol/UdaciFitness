import {AsyncStorage} from 'react-native'
import {CALENDAR_STORAGE_KEY} from './_calendar' // CALENDAR_STORAGE_KEY = 'UdaciFitness:calendar' 
//to "miejsce" w ktorym bedziemy przetrzymywac nasze dane w AsyncStorage
//to tak naprawde zwykly key w obiekcie AsyncStorage

export function submitEntry({ entry, key}){
  return AsyncStorage.mergeItem(CALENDAR_STORAGE_KEY, JSON.stringify({
    [key]: entry
  }))
}

export function removeEntry(key){
  return AsyncStorage.getItem(CALENDAR_STORAGE_KEY)
    .then((results) => {
      const data = JSON.parse(results) // pobiera wszystkie dane z AsyncStorage
      data[key] = undefined // ustawia wartosc pola, ktore chcemy wykasowac na 'undefined'
      delete data[key] // usuwa sam klucz obiektu (najpierw potrzebowalismy usunac jego wartosc)
      AsyncStorage.setItem(CALENDAR_STORAGE_KEY, JSON.stringify(data)) // ustawienie AsyncStorage na taki "po updacie" danych
    })
}