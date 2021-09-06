import React from 'react'

function UseReducerMultiple() {
  const initialState = 0

  const reducer = (state, action) => {
    if (action === 'increment') {
      return state + 1
    }
  }

  const [count, dispatch] = React.useReducer(reducer, initialState)
  const [countTwo, dispatchTwo] = React.useReducer(reducer, initialState)

  return (
    <>
      <div>
        <h2> {count} </h2>
      </div>
      <button onClick={() => dispatch('increment')}>Increment</button>

      <div>
        <h2> {countTwo} </h2>
      </div>
      <button onClick={() => dispatchTwo('increment')}>Increment</button>
    </>
  )
}

export default UseReducerMultiple
