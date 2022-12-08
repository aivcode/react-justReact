/*
  As you can see from the preceding examples, React.memo is for memorizing a
  component. The useMemo Hook is used to memorize values, and useCallback is
  used to memorize functions. Using these techniques when you start developing
  an application is not recommended. Once you have developed the application or
  a large section of it, use Profiler to check for performance leaks. Next,
  identify the cause and use these techniques to fix it.
*/

import React, { useState, useCallback } from "react";
import Combinations from "./memorization/Combinations";
import Shelf from "./memorization/Shelf";

const fieldStyle = {
  marginTop: "20px",
  float: "left",
  width: "75%",
  fontSize: 20,
};

const App = () => {
  // Comment for test commit with new repo title
  // $ git remote set-url origin NEW_URL
  const [bookCount, setBookCount] = useState("");
  const [shelfName, setShelfName] = useState("");
  const [shelfSpace, setShelfSpace] = useState("");

  /*
    Here, the Hook useCallback memorizes the function handleClick. So React.
    memo does not see any changes in the prop checkSpace, preventing the 
    Combinations component from re-rendering. Even if you click the Check Space
    button, the component will not re-render given that there is no change to
    the countBooks and handleClick(), which are the props passed. If you change
    the book count, the component re-renders because of the change in the first
    prop. This way, the useCallback Hook memorizes a function call between
    renders and avoids re-renders due to the function equality behavior.
  */
  const handleClick = useCallback((theSpace) => {
    setShelfSpace(theSpace);
  }, []);

  const handleShelfChange = (e) => {
    setShelfName(e.target.value);
  };
  const handleBookChange = (e) => {
    setBookCount(e.target.value);
  };

  return (
    <div width="100%">
      <input
        placeholder="Shelf Name"
        style={fieldStyle}
        value={shelfName}
        onChange={handleShelfChange}
      />
      <label style={fieldStyle}>
        <Shelf shelfName={shelfName} />
      </label>

      <input
        placeholder="How many books?"
        style={fieldStyle}
        value={bookCount}
        onChange={handleBookChange}
      />
      <label style={fieldStyle}>
        {bookCount > 0 && (
          <Combinations countBooks={bookCount} checkSpace={handleClick} />
        )}
        {shelfSpace && (
          <p style={fieldStyle}>The space at the shelf is - {shelfSpace}</p>
        )}
      </label>
    </div>
  );
};

export default App;
