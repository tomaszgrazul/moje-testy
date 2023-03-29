import { useState } from 'react';
import './App.css';
import Button from './Button';
import Display from './Display';

function App() {

  const [value3, setValue3] = useState(0);

  const getValue = (value2) => {
      console.log('value2', value2);
      setValue3(value2);
  }

  return (
    <div className="App">
      <header className="App-header">
        <h1 className='color'>Moje testy</h1>
        {/* <Button initValue={4}/> */}
        <Button setButton={getValue} />
        <Display value1={value3}/>  
      </header>
    </div>
  );
}

export default App;
