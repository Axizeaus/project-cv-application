import React from "react";

const EducationForm = (props) => {
  return (
    <>
      <h2 className="form-title">Education</h2>
      <form onSubmit={props.handleSubmit} className="form">
        <label htmlFor="schoolName" className="form-label">
          School Name:
          <input
            type="text"
            placeholder="School Name"
            value={props.eduInfo.schoolName}
            name="schoolName"
            onChange={props.handleChange}
            className="form-input"
          />
        </label>
        <label htmlFor="studyTitle" className="form-label">
          Study Title:
          <input
            type="text"
            placeholder="Study Title"
            value={props.eduInfo.studyTitle}
            name="studyTitle"
            onChange={props.handleChange}
            className="form-input"
          />
        </label>
        <label htmlFor="startDate" className="form-label">
          Start Date:
          <input
            type="date"
            value={props.eduInfo.startDate.toISOString().slice(0, 10)}
            name="startDate"
            onChange={props.handleChange}
            className="form-input form-date-input"
          />
        </label>
        <label htmlFor="endDate" className="form-label">
          End Date:
          <input
            type="date"
            value={props.eduInfo.endDate.toISOString().slice(0, 10)}
            name="endDate"
            onChange={props.handleChange}
            className="form-input form-date-input"
          />
        </label>
        <button className="form-btn">Submit</button>
      </form>
    </>
  );
};

export default EducationForm;
