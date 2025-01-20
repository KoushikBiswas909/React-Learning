import React, { useContext } from 'react'
import { UserContext } from '../App'
import ThemeComponent from './ThemeComponent'

function CompC() {
  const {user} = useContext(UserContext)
  return (
    <div>
      {user.name}
      <ThemeComponent/>
    </div>
  )
}

export default CompC
