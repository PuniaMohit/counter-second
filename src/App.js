import './App.css';
import CounterButton from './components/CounterButton/counterButton';
import { useState } from 'react';
import Modals from './components/Modal/modal';


function App() {
  const [isBoxOpen, setIsBoxOpen] = useState(false);

  const handleButtonClick = () => {
    setIsBoxOpen(true);
    console.log('hiii')
  };
console.log(isBoxOpen)


  return (
    <div className="counter-app">
      <CounterButton onClick={handleButtonClick} />
      {isBoxOpen ?
        <Modals setIsBoxOpen={setIsBoxOpen}/>
      :<></>}
    </div>
  );
}

export default App;
