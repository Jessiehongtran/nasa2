import React from 'react';
import './App.css';
import {Header, Tagline, Instruction} from './Components/Style';
import PhotoGrid from './Components/PhotoGrid';

function App() {
  return (
    <div className="App">
      <Header>
        Astronomy is amazing
      </Header>
      <Tagline>
        That's why we've saved these moments
      </Tagline>
      <Instruction>
        Click the following buttons to see Photo of the Days
      </Instruction>
      <PhotoGrid/>
    </div>
  );
}


export default App;
