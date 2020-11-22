import { call, put } from 'redux-saga/effects'
import { Actions } from '../Redux'
import { API } from '../../../Services/Api'

export function* getExample(api: API) {
  const response = yield call(api.example)
  console.log('oxi')
  try {
    if (!response.ok) {
      const apiError = response.data
      yield put(Actions.ui.error(apiError))
      return
    }
    yield put(Actions.entities.setExample(response.data))
    yield put(Actions.ui.success())
  } catch (transformError) {
    yield put(Actions.ui.error(transformError))
  }
}
