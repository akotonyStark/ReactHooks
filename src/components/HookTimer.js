import React, { useState, useEffect, useRef } from 'react'

function HookTimer() {
  const [timer, setTimer] = React.useState(0)
  const intervalRef = useRef()

  React.useEffect(() => {
    intervalRef.current = setInterval(() => {
      setTimer((timer) => timer + 1)
    }, 1000)
    return () => {
      //cleanup
      clearInterval(intervalRef.current)
    }
  }, [])

  return (
    <div>
      <h1>{timer}</h1>
      <button onClick={() => clearInterval(intervalRef.current)}>
        Stop Timer
      </button>
    </div>
  )
}

export default HookTimer
