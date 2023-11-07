import Hello from './Hello';
import StateAndProps from './StateAndProps';
import './App.css';
import { useEffect, useState } from 'react';

function App() {
  const [count, setCount] = useState(0);
  const [text, setText] = useState('');

  useEffect(() => {
    console.log('최초 렌더링');
  }, [])

  useEffect(() => {
    console.log('count 변경');
  }, [count]);

  useEffect(() => {
    console.log('text 변경');
  }, [text]);

  return (
    <div className="App">
      <StateAndProps count={count} text={text} onClick={(e) => {setCount(count+1)}} onChange={(e) => {setText(e.target.value)}} />
      { /* 그냥 setCount와 setText를 props로 보내 사용할 경우 무한 리렌더링 발생할 수 있음 */}
      
      <Hello />
    </div>
  );
}

export default App;
