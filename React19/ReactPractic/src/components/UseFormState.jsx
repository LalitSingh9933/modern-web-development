import React from 'react'
import { useFormStatus } from 'react';

function UseFormState() {
    const handleSubmit = async () => {
        await new Promise(res => setTimeout(res, 2000))
        console.log("submit");
    }
    function CustomerForm() {
        const { pending } = useFormStatus();
        return (<div>
            <input type='text' placeholder='Enter your name' />
            <br />
            <br />
            <input type='text' placeholder='Enter Password' />
            <br />
            <br />
            <button disabled={pending}>{pending}? Submitting:Submit</button>
        </div>);


    }
    return (
        <div>
            <h1>useFormStatus Hook in React js 19</h1>
            <form action={handleSubmit}>
                <CustomerForm/>

            </form>

        </div>
    )
}

export default UseFormState
