import React, { useRef, useState } from 'react'

enum Operator {
    ADDITION, SUBTRACTION, MULTIPLICATION, DIVISION
}

const operatorFromString = (str: string) => {
    switch(str) {
        case '+':
            return Operator.ADDITION
        case '-':
            return Operator.SUBTRACTION
        case 'X':
            return Operator.MULTIPLICATION
        case '/':
            return Operator.DIVISION
        default:
            throw new Error(`Invalid string ${str} for a Operator`)
    }
}

export const useCalculator = () => {
    const [previousNumber, setPreviousNumber] = useState('')
    const [number, setNumber] = useState('0')
    const operator = useRef<Operator>()
    
    const clear = () => {
        setPreviousNumber('0')
        setNumber('0')
        operator.current = undefined
    }

    const changeSign = () => {
        if (number === '0') {
            return
        }

        if (number.startsWith('-')) {
            setNumber(number.substring(1))
        }
        else {
            setNumber('-' + number)
        }
    }

    const percentage = () => {
        setNumber(Number(number) / 100 + '')
    }

    const appendDigit = (digit: string) => {
        if (digit === '.' && number.includes('.')) {
            return
        }
        
        setNumber((number != '0' || digit == '.' ? number : '') + digit)
    }

    const saveOperator = (newOperator: string) => {
        operator.current = operatorFromString(newOperator)
        setPreviousNumber(number)
        setNumber('0')
    }

    const calculate = () => {
        switch(operator.current) {
            case Operator.ADDITION:
                setNumber(Number(previousNumber) + Number(number) + '')
                break
            case Operator.SUBTRACTION:
                setNumber(Number(previousNumber) - Number(number) + '')
                break
            case Operator.MULTIPLICATION:
                setNumber(Number(previousNumber) * Number(number) + '')
                break
            case Operator.DIVISION:
                setNumber(Number(previousNumber) / Number(number) + '')
                break
            default:
        }

        setPreviousNumber('0')
        operator.current = undefined
    }

    return {
        number,
        previousNumber,
        clear,
        changeSign,
        percentage,
        appendDigit,
        saveOperator,
        calculate
    }
}
