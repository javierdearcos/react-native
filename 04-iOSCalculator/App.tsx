/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import { SafeAreaView, StatusBar } from 'react-native';

import { CalculatorScreen } from './src/screens/CalculatorScreen';
import { styles } from './src/themes/AppTheme';

const App = () => {
  return (
    <SafeAreaView style={ styles.blackBackground }>
      <StatusBar
        backgroundColor= 'black'
        barStyle='dark-content'
      />
      <CalculatorScreen />
    </SafeAreaView>
  );
};

export default App;
