import React from 'react'
import ComponentE from './ComponentE'
import ComponentF from './ComponentF'
import { CountContext } from '../App'

function ComponentC({ username }) {
  const countContext = React.useContext(CountContext)

  return (
    <div>
      {/* Component C */}
      {/* <h1>Username in Component C is {username}</h1>
      <ComponentE username={username} /> */}

      <h2>Component C </h2>
      <h2>{countContext.countState.state} </h2>

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

export default ComponentC
