import React from "react";

const DisplayPersonalInfo = (props) => {
  const { name, email, phone } = props.personalInfo;

  return (
    <div className="display-container">
      <h2 className="display-title">This is personal data</h2>
      <ul className="display-list">
        <li className="display-item">Name: {name}</li>
        <li className="display-item">Email: {email}</li>
        <li className="display-item">Phone Number: {phone}</li>
      </ul>
      <button className="editButton" onClick={props.handleEdit}>
        Edit
      </button>
    </div>
  );
};

export default DisplayPersonalInfo;
