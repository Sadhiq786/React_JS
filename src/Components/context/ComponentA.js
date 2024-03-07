import React, { useState } from 'react'
import ComponentB from './ComponentB'

function ComponentA() {

    const[name, setName] =useState("Jagadeesh")

  return (
    <div>
        <ComponentB name={name}/>
    </div>
  )
}

export default ComponentA