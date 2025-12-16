import React, { useEffect, useState } from 'react'

function RadioButton() {
    const [ gender, setGender]=useState('female');
    const [city, setCity]= useState('Dhangadhi');
  return (
    <div className=' border-yellow-400 border-2'>
        <h1>Handle Radio and DropDown</h1>
        <h4> Select Gender</h4>
        <input type='radio' onChange={(event)=>setGender(event.target.value)} name="gender" value={"male"} checked={gender=='male'} id="male"/>
        <label htmlFor='male'>Male</label>
        <input type='radio' onChange={(event) =>setGender(event.target.value)} name="gender" value={"female"} checked={gender=='female'} id='female'/>
        <label htmlFor='female'>Female</label>
        <br/>
        <h2>Selected Gender: {gender}</h2>
<hr/>
<br/>
<h1>Select City</h1>
<select onChange={(event)=>{
    setCity(event.target.value)
}} defaultValue={"dhangadhi"}>
    <option value="kathmanud">Kathmandu</option>
    <option value="dhangadhi">Dhangadhi</option>
    <option value="nepalgunj">Nepalgunj</option>
</select>
<h2>Selected City: {city}</h2>
    </div>
  )
}

export default RadioButton
