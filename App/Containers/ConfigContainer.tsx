/*
 * This container holds only CONFIGURATION information.
 * PROVIDERS should be placed in ProviderContainer.tsx
 * so that they're available for use/configuration here.
 */

import React from 'react'
import { StatusBar, View, StyleSheet } from 'react-native'
import { RootStack } from '../Navigation'

export const ConfigContainer = (): JSX.Element => {
  return (
    <>
      <StatusBar backgroundColor={'#000'} barStyle='dark-content' translucent />
      <View style={styles.container}>
        <RootStack />
      </View>
    </>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
})
