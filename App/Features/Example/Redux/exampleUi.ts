import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { Error } from '../../../Entities'

export interface State {
  fetching: boolean
  error: Error | null
}

export const initialState: State = {
  fetching: false,
  error: null
}

const exampleUiSlice = createSlice({
  name: 'ui/example',
  initialState,
  reducers: {
    request: (state) => {
      state.fetching = true
      state.error = null
    },
    error: (state, action: PayloadAction<Error>) => {
      state.fetching = false
      state.error = action.payload
    },
    success: (state) => {
      state.fetching = false
      state.error = null
    }
  }
})

export default {
  initialState,
  ...exampleUiSlice
}
