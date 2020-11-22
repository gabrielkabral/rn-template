import { configureStore } from '@reduxjs/toolkit'
import createSagaMiddleware from 'redux-saga'
import rootSaga from '../Sagas'
import { Reducer } from './Entities'
import GlobalStore from './Store'

interface Configuration {
  rootReducer: Reducer<any>
}

export default ({ rootReducer }: Configuration) => {
  const sagaMonitor = null
  const sagaMiddleware = createSagaMiddleware({ sagaMonitor })

  const middleware: any[] = [sagaMiddleware]

  const store = configureStore({
    // @ts-ignore
    reducer: rootReducer,
    middleware,
    // @ts-ignore
    enhancers: null
  })

  GlobalStore.set(store)
  sagaMiddleware.run(rootSaga)
  return store
}
