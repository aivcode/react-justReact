import React, { useMemo } from "react";

/*
  The Combinations component is now wrapped in React.memo. React.memo memorizes
  the whole component, so it only re-renders when the props change, in this 
  case countBooks. 
*/
const Combinations = React.memo(({ countBooks, checkSpace }) => {
  console.log("Combinations component is re-rendered");
  let space = "";
  switch (countBooks) {
    case 1 - 5:
      space = "Free space available";
      break;
    case 5 - 10:
      space = "Perfect";
      break;
    case 10 - 15:
      space = "Need extra storage";
      break;
    // default:
    //   space = "Not sufficient";
  }

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

  return (
    <>
      <p>The total number of ways you can arrange books is {arrangements}</p>
      <button onClick={() => checkSpace(space)}>Check Space</button>
    </>
  );
});

export default Combinations;
