import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

export const BoxObjectModel = () => {
  return (
    <View style={ styles.container }>
        <View style={ [styles.box, styles.purpleBox] } />
        <View style={ [styles.box, styles.orangeBox] } />
        <View style={ [styles.box, styles.blueBox] } />
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#28425B'
    },
    box: {
        borderWidth: 10,
        borderColor: 'white',
    },
    purpleBox: {
      flex: 2,
      backgroundColor: '#5856D6'
    },
    orangeBox: {
      flex: 2,
      backgroundColor: '#F0A23B'
    },
    blueBox: {
      flex: 4,
      backgroundColor: '#28C4D9',
    }
})