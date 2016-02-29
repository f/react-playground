import React from 'react'
import CodeMirror from 'react-codemirror'
import 'codemirror/mode/javascript/javascript'

import {setComponents, setCode} from '../actions'

export default class Editor extends React.Component {

  findComponents(code) {
    var components = []
    var components = code.match(/class\s+([\w\d\._$]+)\s+extends(?:React\.|.*)Component\s+\{/mg) || []
    if (components.length) {
      components = components.map(component => {
        let name = component.match(/class\s+([\w\d\._$]+)/)[1]
        return {name, parent: null}
      })
      var subComponentsRE = new RegExp(`class\\s+([\\w\\d\\._$]+)\\s+extends\\s+([\\w\\d\\._$]+)\\s+\\{`, 'mg')
      var subComponents = code.match(subComponentsRE)
      console.log(subComponents, subComponentsRE)
      if (subComponents) {
        components = components.concat(subComponents.map(component => {
          let [, name, parent] = component.match(/class\s+([\w\d\._$]+)\s+extends\s+([\w\d\._$]+)/)
          return {name, parent}
        }))
      }
    }

    if (this.props.state.code !== code) {
      this.props.dispatch(setCode(code))
    }

    let serialize = (list) => (list || []).map(item=>item.name).join()

    if (serialize(components) !== serialize(this.props.state.components)) {
      this.props.dispatch(setComponents(components))
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
