import React from 'react'
import { useState } from 'react'

function Props_state() {

    const [count, setCount] = useState(0)

    const message = "Hello Everyone Good Day😆😆😆"
    return (
        <div>
            <ChildComponent msg={message} count={count} />
            <p>Count: {count}</p>
        </div>
    )
}


function ChildComponent({ msg, count }) {
    return (
        <>
            <p>{msg}</p>
            <p>Count: {count}</p>
        </>
    )
}


export default Props_state