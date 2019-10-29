import React, { useRef, useEffect } from 'react';
import { useCountRenders } from './useCounntRenders';

export const Hello = React.memo(({increment}) => {
  //useCountRenders();

  return (
    <button onClick={() => increment(3)}> hello </button>
  )
});