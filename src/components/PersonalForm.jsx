import React from "react";

const PersonalForm = (props) => {
  return (
    <>
      <h2 className="form-title">General</h2>
      <form onSubmit={props.handleSubmit} className="form">
        <label htmlFor="name" className="form-label">
          Name:
          <input
            type="text"
            value={props.personalInfo.name}
            onChange={props.handleChange}
            name="name"
            id="name"
            className="form-input"
          />
        </label>
        <label htmlFor="email" className="form-label">
          Email:
          <input
            type="email"
            value={props.personalInfo.email}
            onChange={props.handleChange}
            name="email"
            id="email"
            className="form-input"
          />
        </label>
        <label htmlFor="phone" className="form-label">
          Phone:
          <input
            type="text"
            value={props.personalInfo.phone}
            onChange={props.handleChange}
            name="phone"
            id="phone"
            className="form-input"
          />
        </label>
        <button className="form-btn">Submit</button>
      </form>
    </>
  );
};

export default PersonalForm;
