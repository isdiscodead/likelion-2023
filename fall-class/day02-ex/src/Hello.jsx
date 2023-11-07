import React, { useRef, useState } from 'react'

function Hello() {
  const input = useRef();
  const [text, setText] = useState('');

  return (
    <>
      <input ref={input} type='text'></input>
      <button onClick={() => setText(input.current.value)}>전송</button>
      <div>{text}</div>
    </>
  );
}

export default Hello