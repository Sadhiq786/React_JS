import React from 'react'
import ComponentD from './ComponentD'

function ComponentC({name}) {
  return (
    <div>
        <ComponentD name={name}/>
    </div>
  )
}

export default ComponentC