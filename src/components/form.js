import React, { useEffect, useState } from 'react'

const Form = (props) => {
  const [name, setName] = useState('')
  const [age, setAge] = useState('')
  const [job, setJob] = useState('')

  useEffect(() => {
    console.log('EFFECT TAKING PLACE')
    setName(name)
  }, [])

  const nameChangeHandler = (event) => {
    setName(event.target.value)
  }

  return (
    <>
      <div>
        {' '}
        <input
          style={{ width: '30%', height: '30px' }}
          type='text'
          placeholder='name'
          onChange={nameChangeHandler}
          //value={name}
        ></input>
      </div>

      <div>
        <input
          style={{ width: '30%', height: '30px' }}
          type='text'
          placeholder='age'
          value={age}
          onChange={(event) => setAge(event.target.value)}
        ></input>
      </div>

      <div>
        <input
          style={{ width: '30%', height: '30px' }}
          type='text'
          placeholder='job'
          value={job}
        ></input>
      </div>

      <input
        style={{ width: '30%', height: '30px' }}
        type='button'
        value='Do Something'
      />

      <div>
        <h1>{name}</h1>
        <h1>{age}</h1>
        <h1>{job}</h1>
      </div>
    </>
  )
}

export default Form
