import React from 'react';
import './App.css';
import Welcome from './WelcomeMessage';
import styled, {css} from 'styled-components';
import AppLayout from './AppLayout'

const MyButton = styled.div`
  color:green;
  ${props => props.primary && css`      
      color: palevioletred;
    `}
`

const TomatoButton = styled(MyButton)`
  color: tomato;
  border-color: tomato;
`;


function App() {
  return (
    <AppLayout>
      <Welcome/>            
    </AppLayout>
  );
}

export default App;
