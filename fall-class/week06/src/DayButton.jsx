import React from 'react'
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

function DayButton({day}) {

    const navigate = useNavigate();

  return (
    <Button onClick={() => {
        navigate(`/day/${day}`);
    }}>Day {day}</Button>
  )
}

const Button = styled.button`
    background: skyblue;
    color: white;
    border: none;
    padding: 1rem 2rem;
    margin: 0.5rem;
    border-radius: 0.5rem;
`;

export default DayButton