import { useState } from "react";
import "./App.css";
import GeneralForm from "./components/GeneralForm";
import EducationForm from "./components/EducationForm";
import ExpForm from "./components/ExpForm";

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

  const [expInfo, setExpInfo] = useState({
    companyName: "",
    positionTitle: "",
    startDate: new Date(),
    endDate: new Date(),
  });
  const handleEdit = (e) => {
    const { name, value } = e.target;
    setPersonalInfo((prevInfo) => {
      return {
        ...prevInfo,
        [name]: value,
      };
    });
  };

  const handleEduInfoSubmit = (e) => {
    e.preventDefault();
    console.log(e.target[2].valueAsDate);
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
    const { name, value, type, valueAsDate } = e.target;
    setEduInfo((prevInfo) => {
      if (type === "date") {
        return {
          ...prevInfo,
          [name]: valueAsDate,
        };
      }
      return {
        ...prevInfo,
        [name]: value,
      };
    });
  };

  const handleExpInfoChange = (e) => {
    const { name, value, type, valueAsDate } = e.target;
    setExpInfo((prevInfo) => {
      if (type === "date") {
        return {
          ...prevInfo,
          [name]: valueAsDate,
        };
      }
      return {
        ...prevInfo,
        [name]: value,
      };
    });
  };

  console.log(expInfo);
  return (
    <>
      <GeneralForm
        personalInfo={personalInfo}
        handleChange={handlePersonInfoChange}
      />
      <EducationForm
        eduInfo={eduInfo}
        handleChange={handleEduInfoChange}
        handleSubmit={handleEduInfoSubmit}
      />
      <ExpForm expInfo={expInfo} handleChange={handleExpInfoChange} />
    </>
  );
}

export default App;
