import React from 'react'
import { connect } from 'react-redux'
import {
  View,
  Text,
  StyleSheet
} from 'react-native'
import TabView from 'react-native-scrollable-tab-view'
import { Exercise } from '../ui'
import {
  setExerciseStartTime,
  setCurrentDateTime,
  removeExerciseStartTime,
  increaseCompletedSets,
} from '../actions/actions'

class _Workout extends React.Component {
  constructor() {
    super()
    this.state = {
      timer: undefined,
    }
  }
  componentDidMount() {
    const timer = setInterval(this.props.setCurrentDateTime, 1000)
    this.setState({
      timer,
    })
  }

  componentWillUnmount() {
    clearInterval(this.state.timer)
    this.setState({
      timer: undefined,
    })
  }

  render() {
    return (
      <TabView tabBarPosition='overlayTop'>
        {this.props.exercises.map((exercise, index) => (
          <Exercise
            tabLabel={exercise.short}
            key={exercise.name}
            exercise={exercise}
            exerciseId={index}
            currentDateTime={this.props.currentDateTime}
            setExerciseStartTime={this.props.setExerciseStartTime}
            removeExerciseStartTime={this.props.removeExerciseStartTime}
            increaseCompletedSets={this.props.increaseCompletedSets}
          />
        ))}
      </TabView>
    )
  }
}

const mapStateToProps = (state) => ({
  exercises: state.exercises,
  currentDateTime: state.settings.currentDateTime,
})

const mapActionsToProps = (dispatch) => ({
  setExerciseStartTime(exerciseId) {
    return dispatch(setExerciseStartTime(exerciseId))
  },
  setCurrentDateTime() {
    return dispatch(setCurrentDateTime())
  },
  removeExerciseStartTime(exerciseId) {
    return dispatch(removeExerciseStartTime(exerciseId))
  },
  increaseCompletedSets(exerciseId) {
    return dispatch(increaseCompletedSets(exerciseId))
  }
})

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
})

export const Workout = connect(mapStateToProps, mapActionsToProps)(_Workout)