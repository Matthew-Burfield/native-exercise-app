import React from 'react'
import {
  View,
  Text,
  StyleSheet
} from 'react-native'
import LinearGradient from 'react-native-linear-gradient'

export const Workout = ({name, pTime, aTime, rTime}) => (
  <LinearGradient
    colors={['#87FC70', '#0BD318']}
    style={styles.container}
  >
    <Text>{name}</Text>
    {pTime && <Text>prep-time: {pTime} sec</Text>}
    <Text>action-time: {aTime} sec</Text>
    <Text>rest-time: {rTime} min</Text>
  </LinearGradient>
)

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
})