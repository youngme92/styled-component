import React, {Fragment} from 'react';
import styled, { createGlobalStyle, css } from "styled-components";

const GlobalStyle = createGlobalStyle`
  body{
    padding: 0;
    margin: 0;
  }
`;
const awsomeCard = css `
  box-shadow: 0 4px 6px rgba(50, 50, 93, 0.11), 0 1px 3px rgba(0, 0, 0, 0.08);
  background-color: white;
  border-radius: 10px;
  padding: 20px;
`;

const Input = styled
    .input
    .attrs({required: true, placeholder: "hello"})`
      border: none;
      ${awsomeCard}
`;

const Container = styled.div`
height: 100vh;  
width: 100%;
background-color: pink;
`;

function App() {
    return (
        <div className="App">
          <Fragment>
            <GlobalStyle />
                <Container>
                  <Input />
                </Container>
          </Fragment>  
        </div>
    );
}

export default App;
