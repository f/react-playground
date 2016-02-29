import React from 'react'
import CodeMirror from 'react-codemirror'
import 'codemirror/mode/javascript/javascript'

import {setBaseComponents, setDerivedComponents, setCode} from '../actions'

export default class Editor extends React.Component {

  findComponents(code) {

    if (this.props.state.code === code) {
      return
    }

    var derivedComponents = []
    var baseComponents = code.match(/class\s+(\w+)\s+extends(?:React\.|.*)Component/g) || []
    if (baseComponents.length) {
      baseComponents = baseComponents.map(component => {
        let name = component.match(/class\s+(\w+)/)[1]
        return {name}
      })
      var reDerivedComponents = new RegExp(`class\\s+(\\w+)\\s+extends\\s+((${baseComponents.map(bc=>bc.name).join('|')}))`, 'g')
      var derivedComponents = code.match(reDerivedComponents)
      if (derivedComponents) {
        derivedComponents = derivedComponents.map(component => {
          let [, name, parent] = component.match(/class\s+(\w+)\s+extends\s+(\w+)/)
          return {name, parent}
        })
      }
    }

    this.props.dispatch(setCode(code))

    if (baseComponents.length !== this.props.state.baseComponents.length) {
      this.props.dispatch(setBaseComponents(baseComponents))
    }

    if (derivedComponents.length !== this.props.state.derivedComponents.length) {
      this.props.dispatch(setDerivedComponents(derivedComponents))
    }
  }

  render() {
    var options = {
      mode: "javascript",
      lineNumbers: true,
      tabSize: 2,
      theme: ""
    }
    return <div>
      <CodeMirror value={this.props.state.code} onChange={code => this.findComponents(code)} options={options} />
    </div>
  }
}
