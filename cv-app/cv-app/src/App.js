import { useState } from "react";
import "./styles/App.css";
import Education from "./components/Education";
import Experience from "./components/Experience";
import General from "./components/General";
import { Container } from "@mui/material";
import { Paper } from "@mui/material";
import CompletedCV from "./components/CompletedCV";

function App() {
  const [personalInfo, setPersonalInfo] = useState({
    name: "",
    email: "",
    title: "",
    number: "",
  });
  const [experience, setExperience] = useState({
    position: "",
    company: "",
    city: "",
    from: "",
    to: "",
  });
  const [education, setEducation] = useState({
    university: '',
    city: '',
    degree: '',
    subject: '',
    graduated: '',
  })
  return (
    <div className="App">
      <header className="App-header">
        <h1>CV Creator</h1>
      </header>
      <main className="main-container">
        <Container maxWidth="sm" >
        <Paper elevation={3} sx={{padding:4}}>
          <General
            personalInfo={personalInfo}
            setPersonalInfo={setPersonalInfo}
          />

          <Experience experience={experience} setExperience={setExperience} />
          <Education education={education} setEducation={setEducation} />
          </Paper>
          </Container>
        <CompletedCV personalInfo={personalInfo} experience={experience} education={education} />
      </main>
    </div>
  );
}

export default App;
