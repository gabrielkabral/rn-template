import React, { useEffect } from 'react'
import { SafeAreaView, Text } from 'react-native'
import { useDispatch, useSelector } from 'react-redux'
import { RouteProp } from '@react-navigation/native'
import { StackNavigationProp } from '@react-navigation/stack'
import { RootNavigatorParams } from '../../../Navigation'
import { Actions } from '../Redux'
import ExampleSelectors from '../Selectors/exampleSelectors'

interface Props {
  navigation: StackNavigationProp<RootNavigatorParams, 'Example'>
  route: RouteProp<RootNavigatorParams, 'Example'>
}

const ExampleScreen: React.FC<Props> = () => {
  const dispatch = useDispatch()
  const getFAQ = () => dispatch(Actions.ui.request())

  const isFetching = useSelector(ExampleSelectors.isFetching)
  const hasError = useSelector(ExampleSelectors.hasError)
  const data = useSelector(ExampleSelectors.getExample)

  useEffect(() => {
    getFAQ()
  }, [])

  console.log({ isFetching, hasError, data })
  return (
    <SafeAreaView>
      <Text>Dale</Text>
    </SafeAreaView>
  )
}

export default ExampleScreen
