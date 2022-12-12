import { Fragment, useState } from "react";
import "./styles.css"

export default function Test() {
  const [open, setOpen] = useState(true);

  return (
    <>
      <h1 className="title">{open ? "WORKING" : "HOLYDAY"}</h1>
      <button
        className="btnTest"
        onClick={() => {
          setOpen(!open);
        }}
      >
        {open ? "OPEN" : "CLOSED"}
      </button>
    </>
  );
}
