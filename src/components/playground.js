import React from 'react'
import {connect} from 'react-redux'
import Editor from './editor'
import Components from './components'

class Playground extends React.Component {
  render() {
    return <div>
      <Editor {...this.props} />
      <Components {...this.props} />
    </div>
  }
}

export default connect(state => ({state}))(Playground)
