import React from 'react'
import { SafeAreaView } from 'react-native';
import { BoxObjectModel } from './src/screens/BoxObjectModel';

export const App = () => {
  return (
    <SafeAreaView style={{ 
      flex: 1,
      backgroundColor: '#28425B'
    }}>
      <BoxObjectModel />
    </SafeAreaView>
  )
}
