const DisplayEduInfo = (props) => {
  const { schoolName, studyTitle, startDate, endDate } = props.eduInfo;

  return (
    <>
      <h1>This is Edu info display</h1>
      <ul>
        <li>School Name : {schoolName}</li>
        <li>Study Title : {studyTitle}</li>
        <li>Start Date : {startDate.toString()}</li>
        <li>End Date : {endDate.toString()}</li>
      </ul>
      <button onClick={props.handleEdit}>Edit</button>
    </>
  );
};

export default DisplayEduInfo;
