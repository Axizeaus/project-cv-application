const DisplayPersonalInfo = (props) => {
  const { name, email, phone } = props.personalInfo;
  return (
    <>
      <h1>This is personal data</h1>
      <ul>
        <li>{name}</li>
        <li>{email}</li>
        <li>{phone}</li>
      </ul>
      <button onClick={props.handleEdit}>Edit</button>
    </>
  );
};

export default DisplayPersonalInfo;
