import { exercises as initState } from '../initialState'
import * as types from '../actions/types'

export const exercises = (state = initState, action) => {
  switch (action.type) {
    case types.SET_EXERCISE_START_TIME:
      const updatedExercise = state.exercises.slice(0, action.exerciseId)
                              .concat([{
                                ...state.exercises[action.exerciseId],
                                startDate: new Date()
                              }])
      return state
    case types.FINISH_REP:
      return state
    default:
      return state
  }
}