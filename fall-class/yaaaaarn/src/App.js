import './App.css';
import Hello from './Hello';

import styled from 'styled-components';

// JSX : JS + XML( HTML )]
function App() {
  return (
    <>
      <div className="App">
        <Hello />
        <ShadowCard bg='green'> 
          하나은행
          <p style={{ fontSize: '1rem', fontWeight: 'normal' }}>
            추첨 이벤트 어쩌구
          </p>
        </ShadowCard>
        <ShadowCard bg='darkgray'>
          하나은행
          <p style={{ fontSize: '1rem', fontWeight: 'normal' }}>
            할인 이벤트 어쩌구
          </p>
        </ShadowCard>
        <FlatCardContainer>
          <FlatCard bg='darkblue' color='white'>우리은행</FlatCard>
          <FlatCard bg='orange' color='white'>우리은행</FlatCard>
          <FlatCard bg='gray' color='darkgray'>우리은행</FlatCard>
          <FlatCard bg='blue' color='white'>우리은행</FlatCard>
          <FlatCard bg='green' color='white'>우리은행</FlatCard>
        </FlatCardContainer>
      </div>
    </>
  );
}

const FlatCard = styled.div`
  border-radius: 0.4rem;
  background: ${(props) => props.bg};
  color: ${(props) => props.color};
  height: 8rem;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: bold;
  margin: 1rem;
  font-size: 1.4rem;
`;

const ShadowCard = styled.div`
  width: 60%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 10rem;
  font-weight: bold;
  font-size: 1.4rem;
  border-radius: 0.4rem;
  margin: 1rem auto;
  background: ${(props) => props.bg};
  color: white;
  box-shadow: 1px 1px 10px ${(props) => props.bg};
`;

const FlatCardContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  width: 60%;
  margin: 0 auto;
`;

export default App;
