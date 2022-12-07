import React, { useMemo } from "react";

/*
  The Combinations component is now wrapped in React.memo. React.memo memorizes
  the whole component, so it only re-renders when the props change, in this 
  case countBooks. 
*/
const Combinations = React.memo(({ countBooks, shelfName }) => {
  console.log("Combinations component is re-rendered");

  /*
    The useMemo() returns the memorized output if there is no change in the
    dependency [countBooks]. So, when the shelfName changes, it returns the
    memorized value, and when the countBooks changes, it recalculates the
    output and returns it. In this way, we can improve performance by
    memorizing expensive code executions with the useMemo() Hook.
  */
  let arrangements = useMemo(() => {
    console.log("Total number of ways being calculated");
    let arrs = 1;
    for (let i = 2; i <= countBooks; i++) {
      arrs *= i;
    }
    return arrs;
  }, [countBooks]);

  return `The total number of ways you can arrange the books on the shelf 
    ${shelfName} is: ${arrangements}`;
});

export default Combinations;
