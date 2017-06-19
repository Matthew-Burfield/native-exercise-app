import React from 'react';
import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import rootReducer from './src/reducers';
import { Welcome, Workout } from './src/containers'
import Sound from 'react-native-sound'

const store = createStore(rootReducer)

export default class App extends React.Component {
  constructor() {
    super();
    this.state = {
      started: false,
      beep: new Sound('countdownbeep.wav', Sound.MAIN_BUNDLE),
      lastBeep: new Sound('countdownfinalbeep.wav', Sound.MAIN_BUNDLE),
    }
  }

  startWorkout = () => {
    this.setState({ started: true })
    this.state.beep.play((success) => {
      if (success) {
        this.state.lastBeep.play()
      }
    })
  }

  renderRoot(ComponentToRender) {
    return (
      <Provider store={store}>
        <ComponentToRender onStartWorkout={this.startWorkout} />
      </Provider>
    )
  }

  render() {
    return this.state.started ? this.renderRoot(Workout) : this.renderRoot(Welcome)
  }
}
