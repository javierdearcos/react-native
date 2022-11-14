import React, { useState } from 'react'
import { Button, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { FloatingActionButton } from '../components/FloatingActionButton';

export const CounterScreen = () => {

    const [counter, setCounter] = useState(10);

    return (
        <View style={ styles.container }>
            <Text style={styles.title}>
                Counter: { counter }
            </Text>
            <FloatingActionButton 
                title='+1'
                position='right'
                onPress = {() => setCounter(counter + 1)}
            />
            <FloatingActionButton 
                title='-1'
                position='left'
                onPress= {() => setCounter(counter - 1)}
            />
        </View>
  )
}

const styles = StyleSheet.create({
     container : {
        flex: 1,
        justifyContent: 'center',
        shadowColor: "#000",
        shadowOffset: {
            width: 3,
            height: 3,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3,
        elevation: 3,
    },
    title: {
        fontSize: 30,
        textAlign: 'center',
        top: -15
    }
})
