import React from 'react'
import styled from 'styled-components';

function Hello() {
  return (
    <div style={{ marginTop: '10px', background: 'pink'}}>
        <p className='red'>
          Hello World!
          <StyledButton>버튼</StyledButton>
        </p>
    </div>
  )
}

const StyledButton = styled.button`
  color: blue;
  background-color: yellow;
`;

export default Hello