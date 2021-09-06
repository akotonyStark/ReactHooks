import React from 'react'

const initialState = {
  firstCounter: 0,
  secondCounter: 0,
}
const reducer = (state, action) => {
  switch (action.type) {
    case 'increment':
      return { ...state, firstCounter: state.firstCounter + action.value }
    case 'decrement':
      return { ...state, firstCounter: state.firstCounter - action.value }
    case 'incrementSecondCounter':
      return { ...state, secondCounter: state.secondCounter + action.value }
    case 'reset':
      return initialState
    default:
      return state
  }
}

function UseReducerThree() {
  const [count, dispatch] = React.useReducer(reducer, initialState)
  return (
    <div>
      <h1>{count.firstCounter}</h1>
      <button onClick={() => dispatch({ type: 'increment', value: 2 })}>
        Increment
      </button>
      <button onClick={() => dispatch({ type: 'decrement', value: 1 })}>
        Decrement
      </button>
      <button onClick={() => dispatch({ type: 'reset' })}>Reset</button>
    </div>
  )
}

export default UseReducerThree
