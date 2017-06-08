import { exercises as initState } from '../initialState'
import * as types from '../actions/types'

export const exercises = (state = initState, action) => {
  switch (action.type) {
    case types.SET_EXERCISE_START_TIME:
      const newExercise = Object.assign({}, state[action.exerciseId], { startTime: new Date().toString() })
      const newState = [
        ...state.slice(0, action.exerciseId),
        newExercise,
        ...state.slice(action.exerciseId + 1)
      ]
      return newState
    case types.FINISH_REP:
      return state
    default:
      return state
  }
}