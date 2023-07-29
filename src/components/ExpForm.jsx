const ExpForm = (props) => {
  return (
    <>
      <h2>Experience</h2>
      <form onSubmit={props.handleSubmit}>
        <label htmlFor="companyName">
          company name :
          <input
            type="text"
            id="companyName"
            value={props.companyName}
            name="companyName"
            onChange={props.handleChange}
          />
        </label>
        <br />
        <label htmlFor="positionTitle">
          position title :
          <input
            type="text"
            id="positionTitle"
            value={props.positionTitle}
            name="positionTitle"
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
            valueAsDate={props.startDate}
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
            valueAsDate={props.endDate}
            onChange={props.handleChange}
          />
        </label>
        <br />
        <button>Submit</button>
      </form>
    </>
  );
};

export default ExpForm;
