import React, { useReducer, useState } from 'react'

function App() {

  //const [value, setValue] = useState(0)
  //const [hideState, setHideState] = useState(false)
  const reduce = (state, action) => {
    switch(action.type){
      case "INCREMENT":
        return {...state, value: state.value+1};
      case "DECREMENT":
        return {...state, value: state.value-1};
      case "HIDE":
        return {...state, hideState:!state.hideState};
      default:
        return state
    }
  }

  const [state, dispatch] = useReducer(reduce, {value:0, hideState:false})

  return (
    <div>
      <h1>Count is : {state.value}</h1>
      <button onClick={() => {dispatch({type: "INCREMENT"})}}>Increase</button>
      <button onClick={() => {dispatch({type: "DECREMENT"})}}> Decrease</button>
      <button onClick={() => {dispatch({type: "HIDE"})}}>hide</button>
      {
        state.hideState ? (<h3>Hidden</h3>) : (<h3>Not Hidden</h3>)
      }
    </div>
  )
}

export default App
