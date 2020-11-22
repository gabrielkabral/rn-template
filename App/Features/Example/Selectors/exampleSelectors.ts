import { GlobalState } from '../../../Redux'
import { Error } from '../../../Entities'
import { Example } from '../Entities'

const isFetching = (state: GlobalState): boolean => state.ui.example.fetching

const hasError = (state: GlobalState): Error | null => state.ui.example.error

const getExample = (state: GlobalState): Example | null => state.entities.example

export default {
  isFetching,
  hasError,
  getExample
}
