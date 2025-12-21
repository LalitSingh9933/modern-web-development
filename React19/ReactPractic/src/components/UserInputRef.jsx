import React from 'react'
import { forwardRef } from 'react'
//old way

// const UserInputRef=()=> {
//   return (
//     <div>
//       <input type='text' ref={ref}/>
//     </div>
//   )
// }

// export default forwardRef( UserInputRef);
// new way

const UserInputRef=()=>{
  return (<div>
    <input type='text' ref={props.ref}/>
  </div>)
}
export default UserInputRef
