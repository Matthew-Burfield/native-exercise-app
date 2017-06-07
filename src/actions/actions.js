import * as types from './types'

export const setExerciseStartTime = (exerciseId) => ({
  type: types.SET_EXERCISE_START_TIME,
  exerciseId,
})

export const finishExerciseRep = (exerciseId) => ({
  type: types.FINISH_REP,
  exerciseId,
})