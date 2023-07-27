const EducationForm = (props) => {
  return (
    <>
      <h2>Education</h2>
      <form onSubmit={props.handleSubmit}>
        <label htmlFor="schoolName">
          school name :
          <input
            type="text"
            id="schoolName"
            value={props.schoolName}
            name="schoolName"
            onChange={props.handleChange}
          />
        </label>
        <br />
        <label htmlFor="studyTitle">
          study title :
          <input
            type="text"
            id="studyTitle"
            value={props.studyTitle}
            name="studyTitle"
            onChange={props.handleChange}
          />
        </label>
        <br />
        <label htmlFor="startDate">
          start date :{" "}
          <input
            type="date"
            id="startDate"
            name="startDate"
            value={props.startDate}
            onChange={props.handleChange}
          />
        </label>
        <br />
        <label htmlFor="endDate">
          end date :{" "}
          <input
            type="date"
            id="endDate"
            name="endDate"
            value={props.endDate}
            onChange={props.handleChange}
          />
        </label>
        <br />
        <button>Submit</button>
      </form>
    </>
  );
};

export default EducationForm;
