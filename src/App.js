import React, {Fragment} from 'react';
import styled, { createGlobalStyle, ThemeProvider } from "styled-components";
import theme from "./theme";

const GlobalStyle = createGlobalStyle`
  body{
    padding: 0;
    margin: 0;
  }
`;

const Card = styled.div`
  background-color: red;
`;

const Button = styled.button`
  border-radius: 30px;
  padding: 25px 15px;
  background-color: ${props => props.theme.successColor}
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
              <ThemeProvider theme={theme}>
                <Container>
                  <Form />
                </Container>
                </ThemeProvider>
          </Fragment>  
        </div>
    );
}

const Form = () => (
  <Card>
    <Button>hello</Button>
  </Card>
)

export default App;
