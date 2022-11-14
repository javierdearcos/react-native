import { StyleSheet, Text, View } from 'react-native'
import { CalculatorButton } from '../components/CalculatorButton';
import { useCalculator } from '../hooks/useCalculator';

const lightGrayButton = '#9B9B9B'
const orangeButton = '#FF9427'

export const CalculatorScreen = () => {

    const {
        number,
        previousNumber,
        clear,
        changeSign,
        percentage,
        saveOperator,
        appendDigit,
        calculate
    } = useCalculator();


    return (
        <View style={ styles.container }>
            { previousNumber !== '0' && <Text style={ styles.previousNumber }>{ previousNumber }</Text> }
            <Text style={ styles.number } numberOfLines={ 1 } adjustsFontSizeToFit={ true }>{ number }</Text>
            <View style={ styles.row }>
                <CalculatorButton title='AC' color={ lightGrayButton } textColor='black' action={ clear } />
                <CalculatorButton title='+/-' color={ lightGrayButton } textColor='black' action={ changeSign }/>
                <CalculatorButton title='%' color={ lightGrayButton } textColor='black' action={ percentage } />
                <CalculatorButton title='/' color={ orangeButton } action={ saveOperator}/>
            </View>
            <View style={ styles.row }>
                <CalculatorButton title='7' action={ appendDigit } />
                <CalculatorButton title='8' action={ appendDigit } />
                <CalculatorButton title='9' action={ appendDigit } />
                <CalculatorButton title='X' color={ orangeButton } action={ saveOperator }/>
            </View>
            <View style={ styles.row }>
                <CalculatorButton title='4' action={ appendDigit } />
                <CalculatorButton title='5' action={ appendDigit } />
                <CalculatorButton title='6' action={ appendDigit } />
                <CalculatorButton title='-' color={ orangeButton } action={ saveOperator }/>
            </View>
            <View style={ styles.row }>
                <CalculatorButton title='1' action={ appendDigit } />
                <CalculatorButton title='2' action={ appendDigit } />
                <CalculatorButton title='3' action={ appendDigit } />
                <CalculatorButton title='+' color={ orangeButton } action={ saveOperator }/>
            </View>
            <View style={ styles.row }>
                <CalculatorButton title='0' large action={ appendDigit } />
                <CalculatorButton title='.' action={ appendDigit } />
                <CalculatorButton title='=' color={ orangeButton } action={ calculate }/>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'flex-end',
        paddingHorizontal: 20
    },
    previousNumber: {
        fontSize: 30,
        color: 'rgba(255,255,255,0.8)',
        textAlign: 'right'
    },
    number: {
        fontSize: 60,
        textAlign: 'right',
        color: 'white'
    },
    row: {
        flexDirection: 'row',
        justifyContent: 'center'
    }
})