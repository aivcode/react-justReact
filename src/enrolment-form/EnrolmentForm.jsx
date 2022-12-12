import { useState } from "react";
import { MdEdit, MdDelete } from "react-icons/md";  // npm i react-icons
import "./EnrolmentFormMain.css";


const EnrolmentForm = (props) => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [btnValue, setBtnValue] = useState("Enrol");
  const [studentId, setStudentId] = useState(0);

  const handleEdit = (stId) => {
    handleInputReset(firstName, lastName, email);
    setStudentId(stId);
    setBtnValue("Update");
    props.handleItemSelection("edit", stId);
  };

  const handleClickCancel = (event) => {
    handleInputReset("", "", "");
    setBtnValue("Enrol");
    event.preventDefault();
  };

  const handleClick = (event) => {
    handleInputReset("", "", "");
    // Student ID generation
    const randomKey = Math.floor(1000 + Math.random() * 9000);
    let id = randomKey;
    setStudentId(randomKey);
    id = btnValue === "Enrol" ? randomKey : studentId;

    props.setStudentDetails({
      key: id,
      fname: firstName,
      lname: lastName,
      email: email,
      edit: <MdEdit
              className="actionIcon"
              onClick={() => handleEdit(id)}
            />,
      delete: <MdDelete
                className="actionIcon"
                onClick={() => props.handleItemSelection("delete", id)}
              />,
    });

    setBtnValue("Enrol");
    event.preventDefault();
    /*
    We use event.preventDefault( ) in order to avoid additional browser loads.
    a form submit event will invoke browser refresh, which is a native behavior 
    of the submit button. We cancel this default behavior by adding 
    event.preventDefault( ). Whenever you use a submit button, add this line at
    the end of the event function.
    */
  };

  const handleInputChange = (setInput, event) => {
    setInput(event.target.value);
  };

  const handleInputReset = (fname, lname, email) => {
    setFirstName(fname);
    setLastName(lname);
    setEmail(email);
  };


  return (
    <div>
      <div className="enrolContainer">
        <form className="enrolForm" name="enrolForm">
          <ul className="ulEnrol">
            <li>
              <label for="firstname"></label>
              <input
                type="text"
                className="inputFields"
                id="firstname"
                name="firstname"
                placeholder="First Name"
                value={firstName}
                onChange={
                  (event) => handleInputChange(setFirstName, event)
                }
              />
            </li>
            <li>
              <label for="lastname"></label>
              <input
                type="text"
                className="inputFields"
                id="lastname"
                name="lastname"
                placeholder="Last Name"
                value={lastName}
                onChange={
                  (event) => handleInputChange(setLastName, event)
                }
              />
            </li>
            <li>
              <label for="email"></label>
              <input
                type="email"
                className="inputFields"
                id="email"
                name="email"
                placeholder="Email"
                value={email}
                onChange={
                  (event) => handleInputChange(setEmail, event)
                }
              />
            </li>
            <li id="center-btn">
              <input
                className="btn"
                type="submit"
                id="btnEnrol"
                name="Enrol"
                alt="Enrol"
                value={btnValue}
                onClick={handleClick}
              />
              <input
                className="btn"
                type="submit"
                id="btnCancel"
                name="Cancel"
                alt="Cancel"
                value="Cancel"
                onClick={handleClickCancel}
              />
            </li>
          </ul>
        </form>
      </div>
    </div>
  );
};

export default EnrolmentForm;
