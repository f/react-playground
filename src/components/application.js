import React from 'react'
import {Provider} from 'react-redux'
import Playground from './playground'

import STORE from '../store'

export default class Application extends React.Component {
  render() {
    return <Provider store={STORE}>
      <Playground />
    </Provider>
  }
}

