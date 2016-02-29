import {compose, createStore, combineReducers} from 'redux'

function components(state = [], action) {
  switch (action.type) {
    case 'setComponents':
      state = action.data
      break
    case 'addComponent':
      state = state.concat(action.data)
  }
  return state
}

function code(state = "", action) {
  switch (action.type) {
    case 'setCode':
      state = action.data
      break
    case 'addComponent':
      state += `

class ${action.data.name} extends ${action.data.parent} {
  render() {
    return <div></div>
  }
}`
      break
  }
  return state.trim()
}

let createStoreWithMiddlewares = compose(
  window.devToolsExtension ? window.devToolsExtension() : f => f
)(createStore)

const STORE = createStoreWithMiddlewares(combineReducers({
  code,
  components,
}))

window.store = STORE

export default STORE
