import {compose, createStore, combineReducers} from 'redux'

function baseComponents(state = [], action) {
  switch (action.type) {
    case 'setBaseComponents':
      state = action.data
      break
  }
  return state
}

function derivedComponents(state = [], action) {
  switch (action.type) {
    case 'setDerivedComponents':
      state = action.data
      break
  }
  return state
}

function code(state = "", action) {
  switch (action.type) {
    case 'setCode':
      state = action.data
      break
  }
  return state
}

let createStoreWithMiddlewares = compose(
  window.devToolsExtension ? window.devToolsExtension() : f => f
)(createStore)

export default createStoreWithMiddlewares(combineReducers({
  code,
  baseComponents,
  derivedComponents
}))
