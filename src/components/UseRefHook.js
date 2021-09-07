import React, { useState, useEffect, useRef } from 'react'

function UseRefHook() {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const passwordRef = useRef(null)
  const usernameRef = useRef(null)

  useEffect(() => {
    //focus element
    if (username.length > 8) {
      passwordRef.current.focus()
    }

    return () => {
      // cleanup
    }
  }, [username, password])

  const usernameHandler = (event) => {
    //console.log(event.target.value)
    //console.log(usernameRef.current.value)
    setUsername((username) => event.target.value)
  }

  const passwordHandler = function () {
    setPassword((password) => passwordRef.current.value)
  }

  return (
    <div>
      <input
        type='text'
        placeholder='Username'
        onChange={usernameHandler}
        value={username}
        ref={usernameRef}
      />
      <input
        type='text'
        placeholder='Password'
        ref={passwordRef}
        onChange={passwordHandler}
        value={password}
      />
    </div>
  )
}

export default UseRefHook
