import React from 'react'
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet
} from 'react-native'
import LinearGradient from 'react-native-linear-gradient'
import Button from 'apsl-react-native-button'

export const Welcome = ({ onStartWorkout }) => (
  <LinearGradient
    colors={['#87FC70', '#0BD318']}
    style={styles.container}
  >
    <Text style={styles.header}>Welcome</Text>
    <Button
      style={styles.button}
      textStyle={styles.buttonText}
      onPress={onStartWorkout}
    >
      Start Workout
    </Button>
  </LinearGradient>
)

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'stretch'
  },
  header: {
    fontSize: 40,
    color: '#fff',
  },
  buttonContainer: {
  },
  button: {
    backgroundColor: 'transparent'
  },
  buttonText: {
    fontSize: 18,
    color: '#fff'
  }
})