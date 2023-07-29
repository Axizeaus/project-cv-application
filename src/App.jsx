import { useState } from "react";
import "./App.css";
import PersonalForm from "./components/PersonalForm";
import EducationForm from "./components/EducationForm";
import ExpForm from "./components/ExpForm";
import DisplayPersonalInfo from "./components/DisplayPersonal";
import DisplayEduInfo from "./components/DisplayEdu";
import DisplayExpInfo from "./components/DisplayExp";

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

  const [display, setDisplay] = useState({
    displayPersonal: false,
    displayEdu: false,
    displayExp: false,
  });

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

  const handlePersonalInfoSubmit = (e) => {
    e.preventDefault();
    setDisplay((prevDisplay) => {
      return {
        ...prevDisplay,
        displayPersonal: !prevDisplay.displayPersonal,
      };
    });
  };

  const handleEduInfoSubmit = (e) => {
    e.preventDefault();
    setDisplay((prevDisplay) => {
      return {
        ...prevDisplay,
        displayEdu: !prevDisplay.displayEdu,
      };
    });
  };

  const handleExpInfoSubmit = (e) => {
    e.preventDefault();
    setDisplay((prevDisplay) => {
      return {
        ...prevDisplay,
        displayExp: !prevDisplay.displayExp,
      };
    });
  };

  console.log(display);

  const handleEdit = (name) => {
    setDisplay((prev) => {
      return {
        ...prev,
        [name]: !prev[name],
      };
    });
  };

  return (
    <>
      {display.displayPersonal ? (
        <DisplayPersonalInfo
          personalInfo={personalInfo}
          handleEdit={() => handleEdit("displayPersonal")}
        />
      ) : (
        <PersonalForm
          personalInfo={personalInfo}
          handleChange={handlePersonInfoChange}
          handleSubmit={handlePersonalInfoSubmit}
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
          handleChange={handleEduInfoChange}
          handleSubmit={handleEduInfoSubmit}
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
          handleChange={handleExpInfoChange}
          handleSubmit={handleExpInfoSubmit}
        />
      )}
    </>
  );
}
export default App;
