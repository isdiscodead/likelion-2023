import React from 'react'

function StateAndProps({ count, text, onChange, onClick }) {
  return (
    <div>
        <div>{count}</div>
        <button onClick={onClick}></button>
        <hr />
        <input value={text} onChange={onChange}></input>
        <div>{text}</div>
    </div>
  )
}

export default StateAndProps