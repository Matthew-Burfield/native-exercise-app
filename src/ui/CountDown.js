import React from 'react'
import {
  View,
  Text,
  StyleSheet,
} from 'react-native'
import { PREPPING, DOING, RESTING } from '../constants'

const getTimeRemaining = (exercise, secondsSinceStarted, status) => {
  switch (status) {
    case PREPPING:
      return exercise.pTime - secondsSinceStarted
    case DOING:
      return exercise.aTime - (secondsSinceStarted - exercise.pTime)
    case RESTING:
      return exercise.rTime - (secondsSinceStarted - exercise.pTime - exercise.aTime)
    default:
  }
}

export const CountDown = ({ exercise, secondsSinceStarted, status }) => {
  const timeRemaining = getTimeRemaining(exercise, secondsSinceStarted, status)
  return (
    <View>
      {exercise.startTime && <Text>{timeRemaining}</Text>}
    </View>
  )
}
