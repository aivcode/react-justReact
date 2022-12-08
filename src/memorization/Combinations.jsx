import React from "react";
import useFactorial from "./Hooks/useFactorial";

/*
  The Combinations component is now wrapped in React.memo. React.memo memorizes
  the whole component, so it only re-renders when the props change, in this 
  case countBooks. 
*/
const Combinations = React.memo(({ countBooks, checkSpace }) => {
  console.log("Combinations component is re-rendered");
  let space = "";
  switch (countBooks) {
    case 1 - 5: space = "Free space available"; break;
    case 5 - 10: space = "Perfect"; break;
    case 10 - 15: space = "Need extra storage"; break;
    default: space = "Not sufficient";
  }
  console.log(space);
  /*
    The useMemo() returns the memorized output if there is no change in the
    dependency [countBooks]. So, when the shelfName changes, it returns the
    memorized value, and when the countBooks changes, it recalculates the
    output and returns it. In this way, we can improve performance by
    memorizing expensive code executions with the useMemo() Hook.
  */

  return (
    <>
      <p>
        The total number of ways you can arrange books is{" "}
        {useFactorial(countBooks)}
      </p>
      <button onClick={() => checkSpace(space)}>Check Space</button>
    </>
  );
});

export default Combinations;
