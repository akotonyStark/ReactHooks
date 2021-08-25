import React, { useEffect, useState } from 'react'

const UseStateHookWithPrevState = () => {
  const initialCount = 0
  const [count, setCount] = useState(initialCount)

  return (
    <div>
      <h1>Count : {count}</h1>
      <button onClick={() => setCount(count + 1)}>Increment</button>
      <button onClick={() => setCount(count + 5)}>Increment 5</button>
      <button onClick={() => setCount((prevState) => prevState + 10)}>
        Increment 10
      </button>
      <button onClick={() => setCount((prevState) => prevState + 15)}>
        Increment 15
      </button>
      <button onClick={() => setCount(count - 1)}>Decrement</button>
      <button onClick={() => setCount(initialCount)}>Reset</button>
    </div>
  )
}

export default UseStateHookWithPrevState
