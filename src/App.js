import logo from './logo.svg'
import './App.css'
import { useReducer, createContext } from 'react'
import ComponentC from './components/ComponentC'
import ComponentA from './components/ComponentA'
import ComponentB from './components/ComponentB'
import ComponentF from './components/ComponentF'
import ComponentE from './components/ComponentE'
import CounterOne from './components/UseReducerOne'
import CounterTwo from './components/UseReducerTwo'
import UseReducerThree from './components/UseReducerThree'
import UseReducerMultiple from './components/UseReducerMultiple'
import ComponentD from './components/ComponentD'
import UseReducerFetchData from './components/UseReducerFetchData'
import UseRefHook from './components/UseRefHook'

export const UserContext = createContext()
export const PasswordContext = createContext()
export const CountContext = createContext()

const username = 'Augustine'
const initialCount = 0

const reducer = (state, action) => {
  switch (action) {
    case 'increment':
      return state + 1
    case 'decrement':
      return state - 1
    case 'reset':
      return initialCount
    default:
      return state
  }
}

function App() {
  const [state, dispatch] = useReducer(reducer, initialCount)

  return (
    <div className='App'>
      {/* <UserContext.Provider value={username}>
        <PasswordContext.Provider value={'Password@123'}>
          <ComponentF />
          <ComponentE />
        </PasswordContext.Provider>
      </UserContext.Provider>

      <CounterOne />
      <CounterTwo />
      <UseReducerThree />
      <UseReducerMultiple />

      <CountContext.Provider
        value={{ countState: state, countDispatch: dispatch }}
      >
        <h2>{state} </h2>
        <ComponentA username={username} />
        <ComponentB username={username} />
        <ComponentC username={username} />
        <ComponentD />
      </CountContext.Provider> */}

      {/* <UseReducerFetchData /> */}
      <UseRefHook />
    </div>
  )
}

export default App
