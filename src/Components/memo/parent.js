

import React, { useState } from 'react'
import ChildMemo from './child'

function ParentMemo() {

    const[counter, setCounter] = useState(0)
  return (
    <>
    <div>Counter-{counter}</div>
    <button onClick={()=>setCounter(counter+1)}>Count Increament</button>
    <ChildMemo/>
    </>
  )
}

export default ParentMemo