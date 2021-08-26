import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import Form from './components/form'
import UseStateHookWithPrevState from './components/UseStateHookWithPreviousState'
import UseStateWithObject from './components/UseStateWithObject'
import UseStateWithArrays from './components/UseStateWithArrays'
import UseEffectTest from './components/UseEffectTest'
import UseEffectCleanup from './components/UseEffectCleanup'

ReactDOM.render(
  <React.StrictMode>
    {/* <Form></Form>
    <UseStateHookWithPrevState />
    <UseStateWithObject />
    <UseStateWithArrays />
    <UseEffectTest /> */}
    <UseEffectCleanup />
  </React.StrictMode>,
  document.getElementById('root')
)
