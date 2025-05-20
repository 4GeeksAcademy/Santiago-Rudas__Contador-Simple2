import React, { useState, useEffect } from 'react';
import Contador from './Contador';

const Home = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCount(prev => prev + 1);
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  const getDigits = (num) => num.toString().padStart(6, '0').split('');

  return (
    <div className="container mt-5 text-center">
      <h1 className="mb-4">Contador Decimal</h1>
      <Contador digits={getDigits(count)} />
    </div>
  );
};

export default Home;
