import React from 'react'

export default function End(props) {
  return (
    <div className='page end'>
      <h1>{props.points === 16 ? "You won!" : "Game over!"}</h1>
      <h1>You made {props.points} points</h1>
      <button onClick={()=>{props.handlePage(0)}}>Play again</button>
    </div>
  )
}
