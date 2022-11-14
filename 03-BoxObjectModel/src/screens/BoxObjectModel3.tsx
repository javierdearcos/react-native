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
        justifyContent: 'center',
        backgroundColor: '#28425B'
    },
    box: {
        width: 100,
        height: 100,
        borderWidth: 10,
        borderColor: 'white',
    },
    purpleBox: {
      alignSelf: 'flex-end',
      backgroundColor: '#5856D6'
    },
    orangeBox: {
      backgroundColor: '#F0A23B'
    },
    blueBox: {
      alignSelf: 'center',
      backgroundColor: '#28C4D9',
    }
})