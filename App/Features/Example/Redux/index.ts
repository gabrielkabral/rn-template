import { combineReducers } from 'redux'
import ExampleEntity from './exampleEntity'
import ExampleUi from './exampleUi'

export const Actions = {
  ui: ExampleUi.actions,
  entities: ExampleEntity.actions
}

const reducers = {
  ui: ExampleUi.reducer,
  entities: ExampleEntity.reducer
}

// For integration testing purposes
export const featureReducer = combineReducers({
  ui: reducers.ui,
  entities: reducers.entities
})

// For integration testing purposes
export const featureInitialState = {
  ui: ExampleUi.initialState,
  entities: ExampleEntity.initialState
}

export default reducers
