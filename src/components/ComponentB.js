import React, { useContext } from 'react'
import ComponentD from './ComponentD'
import { CountContext } from '../App'

function ComponentB({ username }) {
  const countContext = useContext(CountContext)
  return (
    <div>
      {/* <h1>Username in Component B is {username}</h1>
      <ComponentD username={username} /> */}
      <div>
        <h2>Component B </h2>
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

export default ComponentB
