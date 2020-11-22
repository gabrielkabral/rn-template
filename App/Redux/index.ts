import { combineReducers } from 'redux'
import configureStore from './SetupStore'
// Features
import ExampleFeature from '../Features/Example'

const uiReducers = combineReducers({
  example: ExampleFeature.reducers.ui
})

const entityReducers = combineReducers({
  example: ExampleFeature.reducers.entities
})

export const rootReducer = combineReducers({
  ui: uiReducers,
  entities: entityReducers
})

export default () => {
  const store = configureStore({ rootReducer })
  return { store }
}

export type GlobalState = ReturnType<typeof rootReducer>
