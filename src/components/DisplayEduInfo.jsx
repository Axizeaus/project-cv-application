import React from "react";

const DisplayEduInfo = (props) => {
  const { schoolName, studyTitle, startDate, endDate } = props.eduInfo;

  return (
    <div className="display-container">
      <h2 className="display-title">This is Edu info display</h2>
      <ul className="display-list">
        <li className="display-item">School Name: {schoolName}</li>
        <li className="display-item">Study Title: {studyTitle}</li>
        <li className="display-item">Start Date: {startDate.toString()}</li>
        <li className="display-item">End Date: {endDate.toString()}</li>
      </ul>
      <button className="editButton" onClick={props.handleEdit}>
        Edit
      </button>
    </div>
  );
};

export default DisplayEduInfo;
