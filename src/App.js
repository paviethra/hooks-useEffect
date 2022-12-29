import './index.css';
import { useState, useCallback } from 'react';
import List from './List';

function App() {

const [number,setNumber] = useState(1);
const [dark,setDark] = useState(false);

const getItems = useCallback((Incrementor) =>{
  return [number+Incrementor, number+1+Incrementor, number+2+Incrementor];
}, [number]);

const theme ={
  background:dark ? '#000' : '#FFF',
  color: dark ? '#FFF' : '#000'

}

  return (
    <div style={theme}>
        <input 
        type="number"
        value = {number}
        onChange = {e => setNumber(parseInt(e.target.value))}
        />
        <button onClick={()=> setDark(prevDark => !prevDark)}>
          Toogle Mode
        </button>
        <List getItems = {getItems}/>

    </div>
  );
}

export default App;
