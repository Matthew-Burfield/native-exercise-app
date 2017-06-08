import * as types from './types'

export const setExerciseStartTime = (exerciseId) => ({
  type: types.SET_EXERCISE_START_TIME,
  exerciseId,
})

export const removeExerciseStartTime = (exerciseId) => ({
  type: types.REMOVE_EXERCISE_START_TIME,
  exerciseId,
})

export const setCurrentDateTime = () => ({
  type: types.SET_CURRENT_DATE_TIME,
})

// export const finishExerciseRep = (exerciseId) => ({
//   type: types.FINISH_REP,
//   exerciseId,
// })