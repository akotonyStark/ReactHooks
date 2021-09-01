import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import Form from './components/form'
import UseStateHookWithPrevState from './components/UseStateHookWithPreviousState'
import UseStateWithObject from './components/UseStateWithObject'
import UseStateWithArrays from './components/UseStateWithArrays'
import UseEffectTest from './components/UseEffectTest'
import UseEffectCleanup from './components/UseEffectCleanup'
import IntervalHookCounter from './components/IntervalHookCounter'
import UseEffectFetchData from './components/UseEffectFetchData'
import UseEffectFetchItem from './components/UseEffectFetchItem'
import App from './App'

ReactDOM.render(
  <React.StrictMode>
    <App />
    {/* <Form></Form>
    <UseStateHookWithPrevState />
    <UseStateWithObject />
    <UseStateWithArrays />
    <UseEffectTest /> */}
    {/* <UseEffectCleanup /> */}
    {/* <IntervalHookCounter />
    <UseEffectFetchData /> */}
    {/* <UseEffectFetchItem /> */}
  </React.StrictMode>,
  document.getElementById('root')
)
