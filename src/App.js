import logo from './logo.svg'
import './App.css'
import { createContext } from 'react'
import ComponentC from './components/ComponentC'
import ComponentA from './components/ComponentA'
import ComponentB from './components/ComponentB'
import ComponentF from './components/ComponentF'
import ComponentE from './components/ComponentE'

export const UserContext = createContext()
export const PasswordContext = createContext()

const username = 'Augustine'

function App() {
  return (
    <div className='App'>
      <UserContext.Provider value={username}>
        <PasswordContext.Provider value={'Password@123'}>
          <ComponentF />
          <ComponentE />
        </PasswordContext.Provider>
      </UserContext.Provider>

      {/* <ComponentA username={username} />
      <ComponentB username={username} />
      <ComponentC username={username} /> */}
    </div>
  )
}

export default App
