import React from 'react'
import ComponentD from './ComponentD'

function ComponentB({ username }) {
  return (
    <div>
      <h1>Username in Component B is {username}</h1>
      <ComponentD username={username} />
    </div>
  )
}

export default ComponentB
