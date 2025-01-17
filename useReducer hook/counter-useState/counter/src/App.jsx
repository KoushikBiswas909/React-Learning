import React, { useState } from 'react'

function App() {

  const [value, setValue] = useState(0)
  const [hideState, setHideState] = useState(false)

  return (
    <div>
      <h1>Count is : {value}</h1>
      <button onClick={() => {setValue(value+1)}}>Increase</button>
      <button onClick={() => {setValue(value-1)}}> Decrease</button>
      <button onClick={() => {setHideState(!hideState)}}>hide</button>
      {
        hideState ? (<h3>Hidden</h3>) : (<h3>Not Hidden</h3>)
      }
    </div>
  )
}

export default App
