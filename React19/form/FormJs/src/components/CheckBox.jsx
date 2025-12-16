import React, { useState } from 'react'

function CheckBox() {
    const [language, setLanguage] = useState([]);
    const handleCheckBox = (event) => {
        if (event.target.checked) {
            setLanguage([...language, event.target.value]);
        } else {
            setLanguage([...language.filter((item) => item != event.target.value)]);
        }


    }
    return (

        <div className='  border-green-400 border-2'>
            <h1>This is for Check box</h1>
            <br/>
            <label htmlFor="js">JavaScript</label>
            <input
                type="checkbox"
                id="js"
                value="JavaScript"
                onChange={handleCheckBox}
            />

            <br />

            <label htmlFor="python">Python</label>
            <input
                type="checkbox"
                id="python"
                value="Python"
                onChange={handleCheckBox}
            />

            <br />
            <br />
            <h1>Selected Languages:</h1>
            <p>{language.join(", ")}</p>

        </div>
    )
}

export default CheckBox
