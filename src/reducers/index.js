import { combineReducers } from 'redux'
import { exercises } from './exercises'
import { settings } from './settings'

export default combineReducers({
  exercises,
  settings,
})
