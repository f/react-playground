import React from 'react'
import {connect} from 'react-redux'
import Editor from './editor'

class Playground extends React.Component {
  render() {
    return <div>
      <Editor {...this.props} />
    </div>
  }
}

export default connect(state => ({state}))(Playground)
