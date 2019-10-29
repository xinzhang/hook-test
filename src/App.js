import React, { useState, useMemo, useCallback, useEffect } from "react";
import { Hello } from './Hello';
import { Square } from './Square';
import { useFetch } from './useFetch';
import { useCountRenders } from "./useCounntRenders";

function getDataLength(data) {
  if (!data) {
    return [];
  }
  console.log('get data length');
  return data.split(' ').length;
}

const App = () => {
  const [count, setCount] = useState(0);

  const { data } = useFetch('https://api.kanye.rest');  
  
  const longestWord = useMemo(() => getDataLength(data), [data]);

  return (
    <div >
      <div>Count: {count}</div>
      <button onClick={ () => setCount(count + 1)}>increment</button>
      <div>{longestWord}</div>
      <div>{data}</div>
    </div>    
  );
};


export default App;