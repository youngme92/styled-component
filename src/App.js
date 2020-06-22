import React, {Fragment} from 'react';
import './App.css';

const Button = ({danger}) => (
  <button className={danger ? "button--danger" : "button--success"}>
    hello
  </button>
)

function App() {
  return (
    <div className="App">
      <Fragment>
        <Button danger />
        <Button />
      </Fragment>

    </div>
  );
}

export default App;
