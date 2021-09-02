import React from 'react'

const init = 0

function CounterTwo() {
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

  const [state, dispatch] = React.useReducer(reducer, init)

  const clickHandler = (action) => {
    dispatch(action)
  }

  return (
    <div>
      <h1>{state}</h1>
      <button onClick={() => clickHandler('increment')}>Increment by 5</button>
      <button onClick={() => clickHandler('multiply')}>Multiply by 10</button>
      <button onClick={() => clickHandler('divide')}>Divide by 2</button>
    </div>
  )
}

export default CounterTwo
