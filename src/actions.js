export function setBaseComponents(components) {
  return {
    type: 'setBaseComponents',
    data: components
  }
}

export function setDerivedComponents(components) {
  return {
    type: 'setDerivedComponents',
    data: components
  }
}

export function setCode(code) {
  return {
    type: 'setCode',
    data: code
  }
}
