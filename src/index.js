import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import Form from './components/form'
import UseStateHookWithPrevState from './components/UseStateHookWithPreviousState'
import UseStateWithObject from './components/UseStateWithObject'
import UseStateWithArrays from './components/UseStateWithArrays'

ReactDOM.render(
  <React.StrictMode>
    <Form></Form>
    <UseStateHookWithPrevState />
    <UseStateWithObject />
    <UseStateWithArrays />
  </React.StrictMode>,
  document.getElementById('root')
)
