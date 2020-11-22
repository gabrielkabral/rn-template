import { all, takeLatest } from 'redux-saga/effects'
import { Actions } from '../Redux'

import { getExample } from './Example'
import { API } from '../../../Services/API'

// For testing and mocking purposes
export const Sagas = {
  getExample
}

export default function* root(api: API): any {
  yield all([takeLatest(Actions.ui.request, Sagas.getExample, api)])
}
