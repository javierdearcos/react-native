import React from 'react'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'

interface Props {
    title: string,
    color?: string,
    textColor?: string
    large?: boolean,
    action: (text: string) => void
}

export const CalculatorButton = ({ title,  color = '#2D2D2D', textColor = 'white', large = false, action }: Props) => {    
    return (
        <TouchableOpacity onPress={() => action(title)} activeOpacity={0.5}>
            <View style={[styles.button, large ? styles.largeButton : {}, {backgroundColor: color}]}>
                <Text style={[styles.buttonText, large ? styles.largeButtonText : {}, {color: textColor}]}>{ title }</Text>
            </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    button: {
        width: 80,
        height: 80,
        justifyContent: 'center',
        borderRadius: 100,
        marginVertical: 5,
        marginHorizontal: 10
    },
    largeButton: {
        width: 160,
        marginHorizontal: 20,
    },
    buttonText: {
        fontSize: 30,
        fontWeight: '300',
        textAlign: 'center'
    },
    largeButtonText: {
        left: -45    
    }
})