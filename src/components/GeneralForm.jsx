const GeneralForm = (props) => {
  return (
    <>
      <form>
        <label htmlFor="name">
          name:
          <input
            type="text"
            value={props.name}
            onChange={props.handleChange}
            name="name"
            id="name"
          />
        </label>
        <label htmlFor="email">
          email:
          <input
            type="email"
            value={props.email}
            onChange={props.handleChange}
            name="email"
            id="email"
          />
        </label>
        <label htmlFor="phone">
          phone:
          <input
            type="text"
            value={props.phone}
            onChange={props.handleChange}
            name="phone"
            id="phone"
          />
        </label>
      </form>
    </>
  );
};

export default GeneralForm;
