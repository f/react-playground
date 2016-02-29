import React from 'react'

export default class Components extends React.Component {

  renderSubComponents(parentComp) {
    var subComponents = this.props.state.components.filter(comp => parentComp.name === comp.parent)
    if (subComponents.length > 0) {
      return <ul>
        {subComponents.map((comp, i) => {
          return <li key={`${comp.parent}_${comp.name}_${i}`}>
          {comp.name}
          {this.renderSubComponents(comp)}
          </li>
        })}
      </ul>
    }
  }

  renderComponents() {
    var components = this.props.state.components.filter(comp => !comp.parent).map((comp, i) => {
      return <li key={i}>
        {comp.name}
        {this.renderSubComponents(comp)}
      </li>
    })

    return <ul>
      {components}
    </ul>
  }

  render() {
    return <div>
      {this.renderComponents()}
    </div>
  }
}
