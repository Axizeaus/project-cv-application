const PersonalForm = (props) => {
  return (
    <>
      <h2>General</h2>
      <form onSubmit={props.handleSubmit}>
        <label htmlFor="name">
          name:
          <input
            type="text"
            value={props.personalInfo.name}
            onChange={props.handleChange}
            name="name"
            id="name"
          />
        </label>
        <br />
        <label htmlFor="email">
          email:
          <input
            type="email"
            value={props.personalInfo.email}
            onChange={props.handleChange}
            name="email"
            id="email"
          />
        </label>
        <br />
        <label htmlFor="phone">
          phone:
          <input
            type="text"
            value={props.personalInfo.phone}
            onChange={props.handleChange}
            name="phone"
            id="phone"
          />
        </label>
        <br />
        <button>Submit</button>
      </form>
    </>
  );
};

export default PersonalForm;
