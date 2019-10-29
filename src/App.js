import React, { useState, useMemo, useCallback, useEffect } from "react";
import { Hello } from './Hello';
import { Square } from './Square';

const App = () => {
  const [count, setCount] = useState(0);
  const favoriteNums = [1, 3, 5, 8];

  const increment = useCallback( (n) => {
    setCount( c => c + n);
  }, [setCount]);

  useEffect( () => {
    console.log('useEffect triggered');
  }, []);
  
  return (
    <div >
      <Hello increment={increment} />
      <div>Count: {count}</div>
      {favoriteNums.map( n => (
        <Square num={n} increment={increment} key={n}/>
      ))}
    </div>    
  );
};


export default App;