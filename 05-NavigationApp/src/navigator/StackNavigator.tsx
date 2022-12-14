import React from 'react'

import { createStackNavigator } from '@react-navigation/stack'
import { Page1Screen } from '../screens/Page1Screen';
import { Page2Screen } from '../screens/Page2Screen';
import { Page3Screen } from '../screens/Page3Screen';

const Stack = createStackNavigator()

export const StackNavigator = () => {
  return (
    <Stack.Navigator>
        <Stack.Screen name='Page1Screen'>{Page1Screen}</Stack.Screen>
        <Stack.Screen name='Page2Screen'>{Page2Screen}</Stack.Screen>
        <Stack.Screen name='Page3Screen'>{Page3Screen}</Stack.Screen>
    </Stack.Navigator>
  )
}
