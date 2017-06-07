import React from 'react';
import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import rootReducer from './src/reducers';
import { Welcome, Workout } from './src/containers'

const store = createStore(rootReducer)

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
      <Provider store={store}>
        <ComponentToRender onStartWorkout={this.startWorkout} />
      </Provider>
    )
  }

  render() {
    return this.state.started ? this.renderRoot(Workout) : this.renderRoot(Welcome)
  }
}
