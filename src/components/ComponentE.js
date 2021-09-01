import React from 'react'
import { useContext } from 'react'
import ComponentF from './ComponentF'
import { UserContext, PasswordContext } from '../App'

function ComponentE({ username }) {
  const user = useContext(UserContext)
  const password = useContext(PasswordContext)

  return (
    <div>
      <h1>Username: {user} </h1>
      <h1>Password: {password}</h1>
    </div>
  )
  // return (
  //   <div>
  //     <h1>Username in Component E is {username}</h1>
  //     <ComponentF username={username} />
  //   </div>
  // )
}

export default ComponentE
