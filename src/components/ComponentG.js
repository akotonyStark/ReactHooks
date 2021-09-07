import React, { useContext } from 'react'
import { UserContext, PasswordContext } from '../App'

function ComponentG() {
  const username = useContext(UserContext)
  const password = useContext(PasswordContext)
  return (
    <div>
      <h1>Component G</h1>
      <h2>Username: {username}</h2>
      <h2>Password: {password}</h2>
    </div>
  )
}

export default ComponentG
