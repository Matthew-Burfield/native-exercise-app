import * as types from '../actions/types'

export const settings = (state = {}, action) => {
  switch (action.type) {
    case types.SET_CURRENT_DATE_TIME:
      return Object.assign({}, state, { currentDateTime: new Date().toString()})
    default:
      return state
  }
}
