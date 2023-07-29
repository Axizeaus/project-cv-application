const DisplayExpInfo = (props) => {
  const { companyName, positionTitle, startDate, endDate } = props.expInfo;
  return (
    <>
      <h1>This is Exp info display</h1>
      <ul>
        <li>Company Name : {companyName}</li>
        <li>Position Title : {positionTitle}</li>
        <li>Start Date : {startDate.toString()}</li>
        <li>End Date : {endDate.toString()}</li>
      </ul>
      <button onClick={props.handleEdit}>Edit</button>
    </>
  );
};

export default DisplayExpInfo;
