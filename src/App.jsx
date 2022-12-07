import React, { useState } from "react";
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
  const [bookCount, setBookCount] = useState("");
  const [shelfName, setShelfName] = useState("");

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
          <Combinations countBooks={bookCount} shelfName={shelfName} />
        )}
      </label>
    </div>
  );
};

export default App;
