import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

function Form() {
  const [infos, setInfos] = useState({});
  const [messageError, setMessageError] = useState("");
  const [messageColor, setMessageColor] = useState("");

  const handleInputChange = (e) => {
    let { id, value } = e.target;
    setInfos({ ...infos, [id]: value.trim() });
  };

  const handleErrors = (e) => {
    e.preventDefault();
    const needs = ["fullname", "email", "age"];
    const missingFields = needs.filter((item) => !infos[item]);

    if (missingFields.length > 0) {
      setMessageError(
        `Please complete: ${missingFields.join(", ")}`
      );
      setMessageColor("text-danger"); 
    } else {
      setMessageError("Form submitted successfully!");
      setMessageColor("text-success"); 
    }
  };

  return (
    <div className="container mt-5">
      <form>
        {messageError && <p className={messageColor}>{messageError}</p>}
        <div className="mb-3">
          <input
            type="text"
            id="fullname"
            className="form-control"
            placeholder="Name"
            onChange={handleInputChange}
          />
        </div>
        <div className="mb-3">
          <input
            type="email"
            id="email"
            className="form-control"
            placeholder="Email"
            onChange={handleInputChange}
          />
        </div>
        <div className="mb-3">
          <input
            type="text"
            id="age"
            className="form-control"
            placeholder="Age"
            onChange={handleInputChange}
          />
        </div>
        
        <button
          type="submit"
          className="btn btn-primary"
          onClick={handleErrors}
        >
          Submit
        </button>
      </form>
    </div>
  );
}

export default Form;
