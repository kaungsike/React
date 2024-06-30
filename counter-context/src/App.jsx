import React from 'react'
import Counter from './components/Counter';
import Add from './components/Add';
import Sub from './components/Sub';
import { useState } from 'react';
import CounterProvider from './context/CounterProvider';

const App = () => {


  return (
    <CounterProvider>
      <Counter></Counter>
      <Add/>
      <Sub/>
    </CounterProvider>
  )
}

export default App;