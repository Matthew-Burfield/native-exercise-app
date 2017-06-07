import React from 'react'
import {
  View,
  Text,
  StyleSheet
} from 'react-native'
import LinearGradient from 'react-native-linear-gradient'

export const Exercise = ({name, pTime, aTime, rTime, reps, sets}) => (
  <LinearGradient
    colors={['#87FC70', '#0BD318']}
    style={styles.container}
  >
    <View style={styles.header}>
      <Text style={styles.headerText}>{name}</Text>
    </View>
    <View style={styles.body}>
      <View style={styles.bodyLeft}>
        {reps && <Text style={styles.bodyText}>reps:</Text>}
        {sets && <Text style={styles.bodyText}>sets:</Text>}
        {pTime && <Text style={styles.bodyText}>prep-time:</Text>}
        {aTime && <Text style={styles.bodyText}>action-time:</Text>}
        {rTime && <Text style={styles.bodyText}>rest-time:</Text>}
      </View>
      <View style={styles.bodyRight}>
        {reps && <Text style={styles.bodyText}> {reps}</Text>}
        {sets && <Text style={styles.bodyText}> {sets}</Text>}
        {pTime && <Text style={styles.bodyText}> {pTime} sec</Text>}
        {aTime && <Text style={styles.bodyText}> {aTime} sec</Text>}
        {rTime && <Text style={styles.bodyText}> {rTime} min</Text>}
      </View>
    </View>
    <View style={styles.footer}>
      <Text style={styles.bodyText}>Finish Set</Text>
    </View>
  </LinearGradient>
)

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
})