import React from 'react'
import {
  View,
  Text,
  StyleSheet
} from 'react-native'
import TabView from 'react-native-scrollable-tab-view'
import { Exercise } from './Exercise'

export const Workout = () => (
  // <TabView>
  //   <Exercise name={'Handstand'} pTime={10} aTime={30} rTime={60} />
  //   <Exercise name={'Ring hang'} pTime={10} aTime={60} rTime={60} />
  //   <Exercise name={'Pullups'} reps={5} sets={5} />
  // </TabView>
  <Text>Hey</Text>
)

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
})