import { useState } from "react";
import "./App.css";
import GeneralForm from "./components/GeneralForm";

function App() {
  const [personalInfo, setPersonalInfo] = useState({
    name: "",
    email: "",
    phone: "",
  });

  const [eduInfo, setEduInfo] = useState({
    schoolName: "",
    studyTitle: "",
    startDate: new Date(),
    endDate: new Date(),
  });

  const [exp, setExp] = useState({
    companyName: "",
    positionTitle: "",
    startDate: new Date(),
    endDate: new Date(),
  });

  console.log(personalInfo);

  const handleEdit = (e) => {
    const { name, value } = e.target;
    setPersonalInfo((prevInfo) => {
      return {
        ...prevInfo,
        [name]: value,
      };
    });
  };

  const handlePersonInfoChange = (e) => {
    const { name, value } = e.target;
    setPersonalInfo((prevInfo) => {
      return {
        ...prevInfo,
        [name]: value,
      };
    });
  };

  const handleEduInfoChange = (e) => {
    const { name, value } = e.target;
    setEduInfo((prevInfo) => {
      return {
        ...prevInfo,
        [name]: value,
      };
    });
  };

  return (
    <>
      <GeneralForm
        personalInfo={personalInfo}
        handleChange={handlePersonInfoChange}
      />
      <EducationForm eduInfo={eduInfo} handleChange={handleEduInfoChange} />
    </>
  );
}

export default App;
