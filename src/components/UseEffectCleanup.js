import React, { useEffect, useState } from 'react'
import Form from './form'

const UseEffectCleanup = () => {
  const [display, setDisplay] = useState(true)

  useEffect(() => {
    console.log('component didMount')
  }, [])

  return (
    <>
      <button onClick={() => setDisplay(!display)}>Toggle Display</button>
      {display && <Form />}
    </>
  )
}

export default UseEffectCleanup
