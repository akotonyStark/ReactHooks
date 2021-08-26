import React, { useEffect, useState } from 'react'

const UseEffectTest = () => {
  const [count, setCount] = useState(0)
  const [something, setSomething] = useState('')

  useEffect(() => {
    console.log('EFFECT CHANGE')
    document.title = count
  }, [count, something])

  return (
    <>
      <input
        type='text'
        value={something}
        onChange={(e) => setSomething(e.target.value)}
      />
      <button onClick={() => setCount(count + 1)}>Click {count} times</button>
    </>
  )
}

export default UseEffectTest
