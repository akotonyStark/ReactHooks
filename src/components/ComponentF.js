import React from 'react'
import { PasswordContext, UserContext } from '../App'

function ComponentF() {
  return (
    <div>
      Component F
      <UserContext.Consumer>
        {(user) => {
          return (
            <PasswordContext.Consumer>
              {(password) => {
                return (
                  <div>
                    Username: {user} Password: {password}
                  </div>
                )
              }}
            </PasswordContext.Consumer>
          )
        }}
      </UserContext.Consumer>
    </div>
  )
}

export default ComponentF
