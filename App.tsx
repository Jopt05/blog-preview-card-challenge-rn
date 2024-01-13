import React from 'react'
import { SafeAreaView } from 'react-native';
import { BlogScreen } from './src/screens/BlogScreen';
import { styles } from './src/theme/appTheme';

export const App = () => {
  return (
    <SafeAreaView style={ styles.safeContainer }>
      <BlogScreen />
    </SafeAreaView>
  )
}

export default App;