import React, { useRef, useEffect } from 'react';
import { useCountRenders } from './useCounntRenders';

export const Square = React.memo(({num, increment}) => {
  useCountRenders();

  return (
    <button onClick={() => increment(num)}> {num} </button>
  )
});