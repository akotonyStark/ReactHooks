import React from 'react'

const init = 0

const reducer = (state, action) => {
  switch (action) {
    case 'increment':
      return state + 5
    case 'multiply':
      return state * 10
    case 'divide':
      return state / 2
    default:
      return state
  }
}

function CounterTwo() {
  const [state, dispatch] = useReducer(reducer, init)
  return (
    <div>
      <button onClick={() => dispatch('increment')}>Increment by 5</button>
      <button onClick={() => dispatch('multiply')}>Multiply by 10</button>
      <button onClick={() => dispatch('divide')}>Divide by 2</button>
    </div>
  )
}

export default CounterTwo
