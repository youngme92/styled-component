import React, {Fragment} from 'react';
import styled, { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  body{
    padding: 0;
    margin: 0;
  }
`;

const Container = styled.div`
height: 100vh;  
width: 100%;
background-color: pink;
`;

const Button = styled.button`
border-radius: 50px;
padding: 5px;
min-width: 120px;
color: white;
font-weight: 600;
-webkit-appearance: none;
cursor: pointer;
&:active,
&:focus: {
 outline: none;
}
background-color: ${props => (props.danger ? "#e74c3c" : "#2ecc71" )};  
`;

// Button의 style을 복제하고 확장한다.
const Anchor = styled(Button.withComponent("a"))`
  text-decoration: none;
`;

function App() {
    return (
        <div className="App">
          <Fragment>
            <GlobalStyle />
                <Container>
                    <Button>Hello</Button>
                    <Button danger="danger">Hello</Button>
                    <Anchor href="http://google.com">Go to google</Anchor>
                </Container>
          </Fragment>  
        </div>
    );
}

export default App;
