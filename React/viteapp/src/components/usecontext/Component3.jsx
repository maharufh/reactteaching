import React, { useContext } from 'react'
import { UserContext } from '../../App'

function Component3() {
    const user = useContext(UserContext)
  return (
    <>
    <h2> this is component 3</h2>
    <h2> hello from c3 again {user}</h2>
    </>
  )
}

export default Component3