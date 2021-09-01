import React from 'react'
import ComponentE from './ComponentE'
import ComponentF from './ComponentF'

function ComponentC({ username }) {
  return (
    <div>
      Component C
      {/* <h1>Username in Component C is {username}</h1>
      <ComponentE username={username} /> */}
    </div>
  )
}

export default ComponentC
