import React, { createContext, useState } from 'react'
import CompA from './components/CompA'

// Step1 - Creating a new context
const UserContext = createContext()

function App() {

  // Step2 - Wrap all the child in a provider
  // Step3 - Pass value
  const [user, setUser] = useState({ name: "Koushik" })
  //Theme component data
  const [theme, setTheme] = useState("light")

  // Step4 - Go inside of consumer and consume it.


  return (
    <div>
      hello from App component

      {/* Wrapping child components in a provider */}
      <UserContext.Provider value={{user, theme, setTheme}}>
        <CompA />
      </UserContext.Provider>
    </div>
  )
}

export default App
export { UserContext }
