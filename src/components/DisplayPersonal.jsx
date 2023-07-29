const DisplayPersonalInfo = (props) => {
  const { name, email, phone } = props.personalInfo;
  return (
    <>
      <h1>This is personal data</h1>
      <ul>
        <li>Name : {name}</li>
        <li>Email : {email}</li>
        <li>Phone Number : {phone}</li>
      </ul>
      <button onClick={props.handleEdit}>Edit</button>
    </>
  );
};

export default DisplayPersonalInfo;
