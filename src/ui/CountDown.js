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
    <View style={styles.container}>
      {exercise.startTime && <Text style={styles.countText}>{timeRemaining}</Text>}
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
  countText: {
    color: '#fff',
    fontSize: 200,
    fontWeight: 'bold',
  }
})