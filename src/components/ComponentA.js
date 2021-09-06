import React, { useContext } from 'react'
import { CountContext } from '../App'

function ComponentA({ username }) {
  const countContext = useContext(CountContext)
  return (
    <div>
      {/* <h1>Username in Component A is {username}</h1> */}
      <h2>Compnonent A</h2>
      <div>
        <h2>{countContext.countState.state} </h2>
      </div>
      <button onClick={() => countContext.countDispatch('increment')}>
        Increment
      </button>
      <button onClick={() => countContext.countDispatch('decrement')}>
        Decrement
      </button>
      <button onClick={() => countContext.countDispatch('reset')}>Reset</button>
    </div>
  )
}

export default ComponentA
