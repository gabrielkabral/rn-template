import { all } from 'redux-saga/effects'

import ExampleFeature from '../Features/Example'

import Api from '../Services/API'

import Config from '../Config/DebugConfig'
import FixtureAPI from '../Services/FixtureAPI'

const api = Config.useFixtures ? FixtureAPI : Api.create()

export default function* root(): any {
  yield all([ExampleFeature.sagas(api)])
}
