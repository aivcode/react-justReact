import "./styles.css";
import React, { useState } from "react";
import Time from "./Time";


const App = (props) => {
  /*
     The useState Hook updated the variable’s state,
     which caused the component to re-render. 
  */
  const [open, setOpen] = useState(true);
  const closeTime = () => {
    setOpen(false);
  };
  return (
    <div>
      {open && (
        <>
          <Time />
          <button onClick={closeTime}>Close Time</button>
        </>
      )}
      {!open && <h1>Time display closed</h1>}
    </div>
  );
};
export default App;

// export default class App extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       open: true
//     };
//   }

//   render() {
//     return (
//       <div>
//         {this.state.open && (
//           <>
//             <Time />
//             <button onClick={() => this.setState({ open: false })}>
//               Close Time
//             </button>
//           </>
//         )}
//         {!this.state.open && <h1>Time Display Closed</h1>}
//       </div>
//     );
//   }
// }
