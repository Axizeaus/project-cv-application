import React from "react";

const DisplayExpInfo = (props) => {
  const { companyName, positionTitle, startDate, endDate } = props.expInfo;

  return (
    <div className="display-container">
      <h2 className="display-title">This is Exp info display</h2>
      <ul className="display-list">
        <li className="display-item">Company Name: {companyName}</li>
        <li className="display-item">Position Title: {positionTitle}</li>
        <li className="display-item">Start Date: {startDate.toString()}</li>
        <li className="display-item">End Date: {endDate.toString()}</li>
      </ul>
      <button className="editButton" onClick={props.handleEdit}>
        Edit
      </button>
    </div>
  );
};

export default DisplayExpInfo;
