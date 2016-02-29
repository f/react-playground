export function setComponents(components) {
  return {
    type: 'setComponents',
    data: components
  }
}

export function setCode(code) {
  return {
    type: 'setCode',
    data: code
  }
}

export function addComponent(name, parent = "Component") {
  return {
    type: 'addComponent',
    data: {
      name,
      parent
    }
  }
}

window.addComponent = addComponent
