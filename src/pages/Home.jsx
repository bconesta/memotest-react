import React, { useState } from 'react'

export default function Home(props) {
    const[time, setTime] = useState(60);
    return (
        <div className='page home'>
            <h1 className="tittle">Memotest</h1>
            <label htmlFor="time">Time</label>
            <input type='number' name='time' min='10' value={time} onChange={(e)=>{setTime(e.target.value)}}/>
            <button onClick={()=>{props.handleTime(time);props.handlePage(1)}}>PLAY</button>
        </div>
    )
}
