import { StatusBar } from 'expo-status-bar'
import * as React from 'react'
import { StyleSheet} from 'react-native'

import AppContainer from './navigation/Screens'

export default function App() {
  return (
    <AppContainer>
      <StatusBar></StatusBar>
    </AppContainer>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center'
  }
})
