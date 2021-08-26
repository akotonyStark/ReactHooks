import React from 'react'

function IntervalHookCounter() {
  const [count, setCount] = React.useState(0)

  const tick = () => {
    setCount((prevState) => prevState + 1)
  }

  React.useEffect(() => {
    const interval = setInterval(tick, 1000)

    return () => {
      clearInterval(interval)
    }
  }, [count])

  return (
    <div>
      <h1>{count}</h1>
    </div>
  )
}

export default IntervalHookCounter
