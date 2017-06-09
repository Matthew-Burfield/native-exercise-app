import { exercises as initState } from '../initialState'
import * as types from '../actions/types'

export const exercises = (state = initState, action) => {
  switch (action.type) {
    case types.SET_EXERCISE_START_TIME:
      return [
        ...state.slice(0, action.exerciseId),
        Object.assign({}, state[action.exerciseId], { startTime: new Date().toString() }),
        ...state.slice(action.exerciseId + 1)
      ]

    case types.REMOVE_EXERCISE_START_TIME:
      const newExercise = Object.assign({}, state[action.exerciseId])
      delete newExercise.startTime
      return [
        ...state.slice(0, action.exerciseId),
        newExercise,
        ...state.slice(action.exerciseId + 1)
      ]

    case types.COMPLETE_SET:
      return [
        ...state.slice(0, action.exerciseId),
        Object.assign({}, state[action.exerciseId], { completedSets: state.exercise[action.exerciseId].completedSets + 1}),
        ...state.slice(action.exerciseId + 1)
      ]

    case types.FINISH_REP:
      return state
    default:
      return state
  }
}