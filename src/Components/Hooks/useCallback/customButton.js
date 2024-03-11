
import React from 'react'

function CustomButton({children, onClick}) {

    console.log(children)
  return (
    <div>
        <button onClick={onClick}> {children}</button>
    </div>
  )
}

export default React.memo(CustomButton);