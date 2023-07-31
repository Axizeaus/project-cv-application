import React, { useState } from "react";
import "./App.css";
import PersonalForm from "./components/PersonalForm";
import EducationForm from "./components/EducationForm";
import ExpForm from "./components/ExpForm";
import DisplayPersonalInfo from "./components/DisplayPersonalInfo";
import DisplayEduInfo from "./components/DisplayEduInfo";
import DisplayExpInfo from "./components/DisplayExpInfo";

const App = () => {
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

  const [display, setDisplay] = useState({
    displayPersonal: false,
    displayEdu: false,
    displayExp: false,
  });

  const handleInfoChange = (stateSetter) => (e) => {
    const { name, value, type, valueAsDate } = e.target;
    const fieldValue = type === "date" ? valueAsDate : value;

    stateSetter((prevState) => ({
      ...prevState,
      [name]: fieldValue,
    }));
  };

  const handleSubmit = (e, stateSetter) => {
    e.preventDefault();
    setDisplay((prevDisplay) => ({
      ...prevDisplay,
      [stateSetter.name]: !prevDisplay[stateSetter.name],
    }));
  };

  const handleEdit = (name) => {
    setDisplay((prev) => ({
      ...prev,
      [name]: !prev[name],
    }));
  };

  return (
    <div className="container">
      {display.displayPersonal ? (
        <DisplayPersonalInfo
          personalInfo={personalInfo}
          handleEdit={() => handleEdit("displayPersonal")}
        />
      ) : (
        <PersonalForm
          personalInfo={personalInfo}
          handleChange={handleInfoChange(setPersonalInfo)}
          handleSubmit={(e) => handleSubmit(e, { name: "displayPersonal" })}
        />
      )}

      {display.displayEdu ? (
        <DisplayEduInfo
          eduInfo={eduInfo}
          handleEdit={() => handleEdit("displayEdu")}
        />
      ) : (
        <EducationForm
          eduInfo={eduInfo}
          handleChange={handleInfoChange(setEduInfo)}
          handleSubmit={(e) => handleSubmit(e, { name: "displayEdu" })}
        />
      )}

      {display.displayExp ? (
        <DisplayExpInfo
          expInfo={expInfo}
          handleEdit={() => handleEdit("displayExp")}
        />
      ) : (
        <ExpForm
          expInfo={expInfo}
          handleChange={handleInfoChange(setExpInfo)}
          handleSubmit={(e) => handleSubmit(e, { name: "displayExp" })}
        />
      )}
    </div>
  );
};

export default App;
