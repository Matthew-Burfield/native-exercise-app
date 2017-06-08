import React from 'react'
import {
  View,
  Text,
  StyleSheet,
} from 'react-native'
import moment from 'moment'


export const CountDown = ({ exercise, currentDateTime }) => {
  const currTime = moment(new Date(currentDateTime))
  const exerciseStartTime = moment(new Date(exercise.startTime))
  return (
    <View>
      {exercise.startTime && <Text>{currTime.diff(exerciseStartTime, 'seconds')}</Text>}
    </View>
  )
}
