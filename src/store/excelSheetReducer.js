// create workout reducer
import { rootRef } from './index'
// Action Types
const ADD_WORKOUT_EXERSISES = 'ADD_WORKOUT_EXERSISES'
const REMOVE_WORKOUT = 'REMOVE_WORKOUT'
const GET_EXERCISE_BY_MUSCLES = 'GET_EXERCISES_BY_MUSCLES'

// Initial State
const defaultState = [
  
]

// Muscles
// muscles = [
//   'shoulders','chest','arms','back','legs','core'
// ]

// Base model for exercise object
// exercise = [
//   {
//     id: '',
//     title: '',
//     description: '',
//     muscles: '',

//   }
// ]

// Action Creators
export const addWorkout = workout => ({
  type: ADD_WORKOUT_EXERSISES,
  workout
})

export const removeWorkout = id => ({
  type: REMOVE_WORKOUT,
  id
})

export const getExerciseByMuscles = muscle => ({
  type: GET_EXERCISE_BY_MUSCLES,
  muscle
})

// Thunk Creators

// Reducer

export const exerciseReducer = (state = defaultState, action) => {
  switch (action.type) {
    case ADD_WORKOUT_EXERSISES:
      console.log(rootRef, 'rootRef-----------------------')
      return [...state, action.workout]
    case REMOVE_WORKOUT:
      return state.filter(ex => ex.id !== action.id)
    case GET_EXERCISE_BY_MUSCLES:
      return state
    default:
      return state
  }
}
