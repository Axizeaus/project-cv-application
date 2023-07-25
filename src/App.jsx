import { useState } from "react";
import "./App.css";
import GeneralInfo from "./components/General";

const dummyData = {
  name: "Joe Schmoe",
  email: "joe@schomoe.com",
  phone: "0123 888 654 3214",
};

function App() {
  const [personalInfo, setPersonalInfo] = useState(dummyData);

  console.log(personalInfo);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setPersonalInfo((prevInfo) => {
      return {
        ...prevInfo,
        [name]: value,
      };
    });
  };

  return (
    <>
      <GeneralInfo info={personalInfo} handleChange={handleChange} />
    </>
  );
}

export default App;
