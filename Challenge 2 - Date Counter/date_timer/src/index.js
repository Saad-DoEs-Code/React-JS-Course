import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { useState } from 'react';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

function App(){

  return(
    <Stepper/>
  )

}

function Stepper(){
  const [step, setStep] = useState(1);


  function updateStep(){
    setStep(step + 1);
  }
  function decreaseStep(){
    setStep(step - 1);
  }

  return(<>
  <div className='line'>
    <button onClick={decreaseStep}>-</button>
    <p>Step: {step} </p>
    <button onClick={updateStep}>+</button>
  </div>
    <Counter step={step}/>
  </>)
  
}

function Counter({step}){
  const [count, setCount] = useState(0);


  function updateCount(){
    setCount(count + step);
  }
  function decreaseCount(){
    setCount(count - step);
  }

  return (
    <>
    <div className='line'>
    <button onClick={decreaseCount}>-</button>
    <p>Count: {count} </p>
    <button onClick={updateCount}>+</button>
    </div>
    <DateCalculator count = {count} />
    </>
  )
}

function DateCalculator({count}){
  let date = new Date()
  date.setDate(date.getDate()+count)
  return(
    <>
    <p style={{textAlign:"center"}}>{count} days from today will be {date.toDateString()}</p>
    </>
  )
}
