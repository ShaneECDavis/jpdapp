// create workout reducer
import { rootRef } from './index'
// Action Types
const CALC = 'CALC'
const RESET = 'RESET'

// Initial State
const defaultState = {
  rpm: 0,
  ipm: 0
}

// Action Creators
export const calc = tableValues => ({
  type: CALC,
  tableValues
})

export const reset = () => ({
  type: RESET
})
// export const addWorkout = workout => ({
//   type: ADD_WORKOUT_EXERSISES,
//   workout
// })

// Thunk Creators

// Reducer

export const excelSheetReducer = (state = defaultState, action) => {
  switch (action.type) {
    case CALC: {
      let { sfm, ipt, diameter, flutes } = action.tableValues
      let rpm = (sfm * 3.82) / diameter
      let ipm = flutes * ipt * rpm
      return { rpm, ipm }
    }
    case RESET: {
      return defaultState
    }
    default:
      return state
  }
}
