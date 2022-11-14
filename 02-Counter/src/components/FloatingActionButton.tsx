import React from 'react'
import { Text, TouchableOpacity, View, StyleSheet } from 'react-native';

interface Props {
    title: string,
    position?: 'left' | 'right'
    onPress: () => void
}

export const FloatingActionButton = ({title, position='right', onPress}: Props) => {
  return (
    <TouchableOpacity
        onPress={ onPress }
        activeOpacity={0.8}
        style= {[
            styles.location,
            (position === 'left' ? styles.left : styles.right)
        ]}
    >
        <View style={ styles.container }>
            <Text style={ styles.title }>{ title }</Text>
        </View>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
    container: {
        width: 60,
        height: 60,
        backgroundColor: '#1060FF',
        borderRadius: 100,
        justifyContent: 'center'
    },
    title: {
        fontSize: 15,
        color: 'white',
        alignSelf: 'center'
    },
    location: {
        position: 'absolute',
        bottom: 50
    },
    left: {
        left: 25
    },
    right: {
        right: 25
    },
})
