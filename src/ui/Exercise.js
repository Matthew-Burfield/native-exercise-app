import React from 'react'
import {
  View,
  Text,
  StyleSheet
} from 'react-native'
import LinearGradient from 'react-native-linear-gradient'
import Button from 'apsl-react-native-button'

export const Exercise = (props) => {
  const e = props.exercise
  const { setExerciseStartTime, exerciseId } = props
  return (
    <LinearGradient
      colors={['#87FC70', '#0BD318']}
      style={styles.container}
    >
      <View style={styles.header}>
        <Text style={styles.headerText}>{e.name}</Text>
      </View>
      <View style={styles.body}>
        <View style={styles.bodyLeft}>
          {e.reps && <Text style={styles.bodyText}>reps:</Text>}
          {e.sets && <Text style={styles.bodyText}>sets:</Text>}
          {e.pTime && <Text style={styles.bodyText}>prep-time:</Text>}
          {e.aTime && <Text style={styles.bodyText}>action-time:</Text>}
          {e.rTime && <Text style={styles.bodyText}>rest-time:</Text>}
        </View>
        <View style={styles.bodyRight}>
          {e.reps && <Text style={styles.bodyText}> {e.reps}</Text>}
          {e.sets && <Text style={styles.bodyText}> {e.sets}</Text>}
          {e.pTime && <Text style={styles.bodyText}> {e.pTime} sec</Text>}
          {e.aTime && <Text style={styles.bodyText}> {e.aTime} sec</Text>}
          {e.rTime && <Text style={styles.bodyText}> {e.rTime} min</Text>}
        </View>
      </View>
      <View style={styles.footer}>
        <Button
          style={styles.footerButton}
          onPress={() => setExerciseStartTime(exerciseId)}
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
    flex: 0.3,
    justifyContent: 'center',
  },
  headerText: {
    fontSize: 40,
    color: '#fff',
    fontWeight: 'bold',
  },
  body: {
    flex: 0.4,
    flexDirection: 'row',
  },
  bodyLeft: {
    alignItems: 'flex-end',
    flex: 0.5,
  },
  bodyRight: {
    alignItems: 'flex-start',
    flex: 0.5,
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