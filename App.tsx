import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function App() {
  return (
    <>
    <View style={styles.contenedor1}>
      <Text>Texto A</Text>
      <Text>Texto B</Text>
      <Text>Texto C</Text>
    </View>
    <View style={styles.contenedor2}>
      <Text style={styles.texto}>Texto A</Text>
      <Text style={styles.texto}>Texto B</Text>
      <Text style={styles.texto}>Texto C</Text>
      <Text style={styles.texto}>Texto D</Text>
      <Text style={styles.texto}>Texto E</Text>
      <Text style={styles.texto}>Texto F</Text>
      <Text style={styles.texto}>Texto G</Text>
      <Text style={styles.texto}>Texto H</Text>
      <Text style={styles.texto}>Texto I</Text>
      <Text style={styles.texto}>Texto J</Text>
      <Text style={styles.texto}>Texto K</Text>
    </View>
    <View style={styles.contenedor3}>
      <Text>Texto A</Text>
      <Text>Texto B</Text>
      <Text>Texto C</Text>
    </View>
    </>
  )
}

const styles = StyleSheet.create({
  texto: {
    backgroundColor: 'yellow'
  },
  textoB: {
    backgroundColor: 'yellow',
    alignSelf: 'stretch'
  },
  contenedor1: {
    flex: 1,
    backgroundColor: 'red',
    justifyContent: 'space-evenly'
  },
  contenedor2: {
    flex: 1,
    backgroundColor: 'orange',
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignContent: 'space-evenly'
  },
  contenedor3: {
    flex: 1,
    backgroundColor: 'green',
    justifyContent: 'space-evenly'
  }
})