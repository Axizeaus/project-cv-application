const DisplayEduInfo = (props) => {
  const { schoolName, studyTitle, startDate, endDate } = props.eduInfo;

  return (
    <>
      <h1>This is Edu info display</h1>
      <ul>
        <li>{schoolName}</li>
        <li>{studyTitle}</li>
        <li>{startDate.toString()}</li>
      </ul>
      <button onClick={props.handleEdit}>Edit</button>
    </>
  );
};

export default DisplayEduInfo;
