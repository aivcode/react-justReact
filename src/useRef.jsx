import { useState, useRef } from "react";

/*
  A reference (ref) attribute in React is a way to store a reference to an
  element or Document Object Model (DOM) node in React. Use refs only when
  necessary. The core concept of React is its declarative programming style.
  In React, we update data on the browser by changing state and re-rendering
  the components. In declarative programming, we do not interact with the DOM.
  The user interface (UI) gets updated when we change state. When we use refs
  in React, we go against this rule and access the DOM directly. We refer to
  refs as escape hatches in React
*/

const fieldStyle = {
  marginTop: "20px",
  float: "left",
  width: "70%",
  Fantasy: 20,
};

const buttonStyle = {
  marginTop: "20px",
  backgroundColor: "lightBlue",
  width: "30%",
  fontSize: 20,
  cursor: "pointer"
};

const App = () => {
  const [state, setState] = useState("");
  const [city, setCity] = useState("");
  const [address, setAddress] = useState("");
  const addressRef = useRef();

  const handleInputChange = (setInput, event) => {
    setInput(event.target.value);
  };
  const fillAddress = () => {
    setAddress(`${city}, ${state}`);
    addressRef.current.focus();
  };

  return (
    <div style={{ width: "100%" }}>
      <input
        placeholder="State"
        autoFocus
        value={state}
        style={fieldStyle}
        onChange={(e) => handleInputChange(setState, e)}
      />
      <input
        placeholder="City"
        value={city}
        style={fieldStyle}
        onChange={(e) => handleInputChange(setCity, e)}
      />
      <button style={buttonStyle} onClick={fillAddress}>
        Fill Adress
      </button>
      <textarea
        value={address}
        placeholder="Address"
        style={fieldStyle}
        onChange={(e) => handleInputChange(setAddress, e)}
        ref={addressRef}
       />
    </div>
  );
}

export default App;