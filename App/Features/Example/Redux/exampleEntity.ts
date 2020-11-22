import { createSlice, PayloadAction, SliceCaseReducers } from '@reduxjs/toolkit'
import { Example } from '../Entities'

export type State = Example | null

export const initialState: State = null

const exampleEntitySlice = createSlice<State, SliceCaseReducers<State>>({
  name: 'entities/example',
  initialState,
  reducers: {
    setExample: (_, action: PayloadAction<Example>) => {
      return action.payload
    }
  }
})

export default {
  initialState,
  ...exampleEntitySlice
}
