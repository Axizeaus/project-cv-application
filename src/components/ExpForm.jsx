import React from "react";

const ExpForm = (props) => {
  return (
    <>
      <h2 className="form-title">Experience</h2>
      <form onSubmit={props.handleSubmit} className="form">
        <label htmlFor="companyName" className="form-label">
          Company Name:
          <input
            type="text"
            id="companyName"
            value={props.companyName}
            name="companyName"
            onChange={props.handleChange}
            className="form-input"
            placeholder="Company Name"
          />
        </label>
        <label htmlFor="positionTitle" className="form-label">
          Position Title:
          <input
            type="text"
            id="positionTitle"
            value={props.positionTitle}
            name="positionTitle"
            onChange={props.handleChange}
            className="form-input"
            placeholder="Position Title"
          />
        </label>
        <label htmlFor="startDate" className="form-label">
          Start Date:
          <input
            type="date"
            id="startDate"
            name="startDate"
            value={props.startDate}
            onChange={props.handleChange}
            className="form-input form-date-input"
          />
        </label>
        <label htmlFor="endDate" className="form-label">
          End Date:
          <input
            type="date"
            id="endDate"
            name="endDate"
            value={props.endDate}
            onChange={props.handleChange}
            className="form-input form-date-input"
          />
        </label>
        <button className="form-btn">Submit</button>
      </form>
    </>
  );
};

export default ExpForm;
