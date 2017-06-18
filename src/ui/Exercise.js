import React from 'react'
import {
  View,
  Text,
  StyleSheet
} from 'react-native'
import LinearGradient from 'react-native-linear-gradient'
import Button from 'apsl-react-native-button'
import moment from 'moment'
import { CountDown } from './CountDown'
import { PREPPING, DOING, RESTING } from '../constants'

const getStatus = (pTime, aTime, rTime, secondsSinceStarted, removeExerciseStartTime) => {
  if (secondsSinceStarted <= pTime) {
    return PREPPING
  } else if (secondsSinceStarted <= pTime + aTime) {
    return DOING
  } else if (secondsSinceStarted <= pTime + aTime + rTime) {
    return RESTING
  }
  return undefined
}

const handleStartTimeWhenTimerFinishes = (exerciseId, startTime, status, removeExerciseStartTime) => {
  if (startTime && !status) {
    removeExerciseStartTime(exerciseId)
  }
}

const getGradient = (status) => {
  switch (status) {
    case DOING:
      return ['#FF9500', '#FF5E3A']
    case RESTING:
      return ['#FF3B30', '#FF1300']
    case PREPPING:
    default:
      return ['#87FC70', '#0BD318']
  }
}

const handleButtonPress = (exerciseId, setExerciseStartTime, increaseCompletedSets) => {
  setExerciseStartTime(exerciseId)
  increaseCompletedSets(exerciseId)
}

export const Exercise = (props) => {
  const e = props.exercise
  const { setExerciseStartTime,
    removeExerciseStartTime,
    increaseCompletedSets,
    exerciseId,
    currentDateTime
  } = props
  const secondsSinceStarted = moment(new Date(currentDateTime)).diff(moment(new Date(e.startTime)), 'seconds')
  const status = getStatus(e.pTime, e.aTime, e.rTime, secondsSinceStarted, removeExerciseStartTime)
  // handleStartTimeWhenTimerFinishes(exerciseId, e.startTime, status, removeExerciseStartTime)
  return (
    <LinearGradient
      colors={getGradient(status)}
      style={styles.container}
    >
      <View style={styles.header}>
        <Text style={styles.headerText}>{e.name}</Text>
      </View>
      <View style={styles.body}>
        <View style={styles.bodyLeft}>
          {e.reqReps && <Text style={styles.bodyText}>reps:</Text>}
          {e.reqSets && <Text style={styles.bodyText}>sets:</Text>}
          {e.pTime && <Text style={styles.bodyText}>prep-time:</Text>}
          {e.aTime && <Text style={styles.bodyText}>action-time:</Text>}
          {e.rTime && <Text style={styles.bodyText}>rest-time:</Text>}
        </View>
        <View style={styles.bodyRight}>
          {e.reqReps && <Text style={styles.bodyText}> {e.reqReps}</Text>}
          {e.reqSets && <Text style={styles.bodyText}> {e.completedSets}/{e.reqSets}</Text>}
          {e.pTime && <Text style={styles.bodyText}> {e.pTime} sec</Text>}
          {e.aTime && <Text style={styles.bodyText}> {e.aTime} sec</Text>}
          {e.rTime && <Text style={styles.bodyText}> {e.rTime} min</Text>}
        </View>
      </View>
      <CountDown
        exercise={e}
        secondsSinceStarted={secondsSinceStarted}
        status={status}
      />
      <View style={styles.footer}>
        <Button
          style={styles.footerButton}
          onPress={() => handleButtonPress(exerciseId, setExerciseStartTime, increaseCompletedSets)}
        >
          <Text style={styles.footerButtonText}>Finish Rep</Text>
        </Button>
      </View>
    </LinearGradient>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },
  header: {
    flex: 0.5,
    justifyContent: 'center',
  },
  headerText: {
    fontSize: 40,
    color: '#fff',
    fontWeight: 'bold',
  },
  body: {
    flex: 0.1,
    flexDirection: 'row',
  },
  bodyLeft: {
    alignItems: 'flex-end',
    flex: 1,
  },
  bodyRight: {
    alignItems: 'flex-start',
    flex: 1,
  },
  bodyText: {
    fontSize: 25,
    color: '#fff',
  },
  footer: {
    flex: 0.3,
  },
  footerButton: {
    height: 100,
    width: 400,
  },
  footerButtonText: {
    color: '#fff',
    fontSize: 40
  },
})