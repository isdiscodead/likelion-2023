import React, { useRef, useState } from 'react'

function Hello() {
  const input = useRef('');
  const [text, setText] = useState('');

  return (
    <>
      <input value={input.current} type='text' onChange={(e) => {input.current = e.target.value}}></input>
      <button onClick={() => setText(input.current.value)}>전송</button>
      <div>{text}</div>
    </>
  );
}

export default Hello