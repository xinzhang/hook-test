import React, { useState, useMemo, useCallback, useEffect } from "react";

const App = () => {
  // We create two states that will keep count of the number of time all hooks are called
  const [callbackCount, setCallbackCount] = useState(0);
  const [memoCount, setMemoCount] = useState(0);

  const memoFunction = () => {
    console.log(memoCount, "memo called");
    // Do something that will take a lot of processing ...
  };

  // Here if we give an empty array of dependencies, the callback function will return the old value of callbackCount
  // because useCallback will return its memoized version
  const callbackFunction = useCallback(() => {
    console.log(callbackCount, "callback called");
    // Do something with callbackCount ...
    return callbackCount;
  }, [callbackCount]);

  // We create the memo hook, when memoCount changes, the function will be executed again
  useMemo(memoFunction, [memoCount]);

  return (
    <>
      {/* This component will receive a function that will change when the dependency value changes */}
      <ChildComponent action={callbackFunction} />
      <p/>
      {/* Change the callback hook dependency to trigger a change in the child */}
      <button onClick={() => setCallbackCount(callbackCount + 1)}>
        Change callback count
      </button>

      {/* After creating useMemo, each change of memoCount will trigger the function passed to the hook,
    otherwise the memoized value will be returned */}
      <button onClick={() => setMemoCount(memoCount + 1)}>
        Change memo count
      </button>
    </>
  );
};

const ChildComponent = ({action}) => {
  const [value, setValue] = useState(0)

  useEffect(() => {
    let val = action()
    setValue(val)
  }, [action]) 

  return(
    <>
    Child : {value}
    </>
  )
}

export default App;