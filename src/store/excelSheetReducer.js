// create workout reducer
import { rootRef } from './index'
// Action Types
const RPM_CALC = 'RPM_CALC'
const IPM_CALC = 'IPM_CALC'

// Initial State
const defaultState = []

// Action Creators
export const calcRPM = tableValues => ({
  type: RPM_CALC,
  tableValues
})
// export const addWorkout = workout => ({
//   type: ADD_WORKOUT_EXERSISES,
//   workout
// })

// Thunk Creators

// Reducer

export const excelSheetReducer = (state = defaultState, action) => {
  switch (action.type) {
    case RPM_CALC: {
      console.log(action.tableValues)
    }
    default:
      return state
  }
}
