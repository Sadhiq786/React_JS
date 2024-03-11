

import React from 'react'

function ChildMemo() {
    console.log("Child Rendering")
  return (
    <>
    <div>ChildMemo</div>
    </>
  )
}

// export default ChildMemo;
export default React.memo(ChildMemo);