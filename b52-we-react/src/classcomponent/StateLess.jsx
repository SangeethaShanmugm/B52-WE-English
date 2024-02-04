import React, { useState } from 'react'

function StateLess() {
    const [seconds, setSeconds] = useState(0)

    const startTimer = () => {
        //update time every second
        setInterval(() => {
            setSeconds((prevSeconds) => prevSeconds + 1)
        }, 1000)
    }
    return (
        <div>
            <h1>StateLess</h1>
            <h3>Timer: {seconds} sec</h3>
            <button onClick={startTimer}>Start Timer</button>
        </div>
    )
}

export default StateLess