import React from "react";

/*
  The Combinations component is now wrapped in React.memo. React.memo memorizes
  the whole component, so it only re-renders when the props change, in this 
  case countBooks. 
*/
const Combinations = React.memo(({ countBooks }) => {
  console.log("Combinations component is re-rendered");
  let arrangements = 1;
  for (let i = 2; i <= countBooks; i++) {
    arrangements *= i;
  }
  return `The total number of ways you can arrange the books is : ${arrangements}`;
});

export default Combinations;
