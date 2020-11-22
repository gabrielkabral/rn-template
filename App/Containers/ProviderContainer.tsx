/*
 * This container holds only PROVIDERS.
 * Any configuration should be done in ConfigContainer, from where all data provided is available.
 */

import React from 'react'
import { StyleSheet } from 'react-native'
import { SafeAreaProvider } from 'react-native-safe-area-context'
import { NavigationContainer } from '@react-navigation/native'
import { Provider as ReduxProvider } from 'react-redux'

import configureStore from '../Redux'

import { ConfigContainer } from './ConfigContainer'
import { NavigationRef } from '../Services/Navigation'

const { store } = configureStore()

export const App = (): JSX.Element => {
  return (
    <SafeAreaProvider>
      <ReduxProvider store={store}>
        <NavigationContainer ref={NavigationRef}>
          <ConfigContainer />
        </NavigationContainer>
      </ReduxProvider>
    </SafeAreaProvider>
  )
}

const styles = StyleSheet.create({
  loading: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
})
