import React, { useEffect } from 'react'

function Mountring({count, data}) {

  useEffect(() => {
    console.log("mounting phase only");
  }, []);
  useEffect(() => {
    console.log("update phase only");
  }, [count]);

  useEffect(()=>{
    return ()=>{
      console.log("un Mount pahse only")
    }
  })


  return (
    <div>
      <h1>Count value{count}</h1>
      <h1>Data Value {data}</h1>

    </div>
  )
}

export default Mountring
