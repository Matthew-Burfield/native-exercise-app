import React from 'react';
import { Welcome, Workout } from './src/containers'

export default class App extends React.Component {
  constructor() {
    super();
    this.state = {
      started: false
    }
  }

  startWorkout = () => {
    this.setState({ started: true })
  }

  renderRoot(ComponentToRender) {
    return (
      <ComponentToRender onStartWorkout={this.startWorkout} />
    )
  }

  render() {
    return this.state.started ? this.renderRoot(Workout) : this.renderRoot(Welcome)
  }
}
