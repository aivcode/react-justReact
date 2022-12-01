import { useReducer, useRef } from "react";

const fieldStyle = {
  marginTop: "20px",
  float: "left",
  width: "70%",
  fontSize: 20,
};

const buttonStyle = {
  marginTop: "20px",
  backgroundColor: "lightBlue",
  width: "30%",
  fontSize: 20,
  cursor: "pointer"
};

const reducer = (state, action) => {
  const {type, payload} = action;
  return {...state, [type]: payload};
};

const App = () => {
  // const [state, setState] = useState("");
  // const [city, setCity] = useState("");
  // const [address, setAddress] = useState("");
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
};

export default App;
