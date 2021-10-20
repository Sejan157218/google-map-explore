import { DirectionsService } from '@react-google-maps/api';
import { useRef, useState } from 'react';
import './App.css';
import Directionmap from './Components/Directionmap/Directionmap';
import Googlemap from './Components/GoogleMap/Googlemap';

function App() {
const [origin,setOrigin] = useState('');
const [destination,setDestination] = useState('');
const originRef=useRef('');
const destinationRef=useRef('');

  const handlerDirection= e =>{
    setOrigin(originRef.current.value);
    setDestination(destinationRef.current.value);
    e.preventDefault();
  }
  return (
    <div className="App">
      <form onSubmit={handlerDirection}>
        <input type="text" ref={originRef} placeholder="start from" />
        <br />
        <input type="text" ref={destinationRef} placeholder="Destination" />
        <br />
        <input type="submit" value="Get Direction" />
      </form>
      <Googlemap></Googlemap>
      <Directionmap destination={destination} origin={origin} ></Directionmap>
    </div>
  );
}

export default App;
