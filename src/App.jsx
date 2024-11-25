import React from 'react';
import Header from './components/Header';
import GreetingCard from './components/GreetingCard';
import './index.css';

function App() {
  return (
    <>
      <Header />
      
      <GreetingCard 
        title="Happy Birthday!" 
        message="Wishing you a fantastic day filled with joy!" 
      />
      <GreetingCard 
        title="Congratulations!" 
        message="Great job on your achievement!" 
      />
      <GreetingCard 
        title="Thank You!" 
        message="Thanks for your kindness and support" 
      />
    </>
  );
}

export default App;
