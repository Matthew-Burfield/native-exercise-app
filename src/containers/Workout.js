import React from 'react'
import {
  View,
  Text,
  StyleSheet
} from 'react-native'
import TabView from 'react-native-scrollable-tab-view'
import { Exercise } from '../ui'

export const Workout = () => (
  <TabView tabBarPosition='overlayTop'>
    <Exercise tabLabel={'HS'} name={'Handstand'} pTime={10} aTime={30} rTime={60} />
    <Exercise tabLabel={'RH'} name={'Ring hang'} pTime={10} aTime={60} rTime={60} />
    <Exercise tabLabel ={'PU'} name={'Pullups'} reps={5} sets={5} />
  </TabView>
  
)

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
})