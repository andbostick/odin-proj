import { useState } from "react";
import "./styles/App.css";
import Education from "./components/Education";
import Experience from "./components/Experience";
import General from "./components/General";
import { Container } from "@mui/material";
import { Paper } from "@mui/material";
import { useRef } from "react";
import ReactToPrint, { useReactToPrint } from 'react-to-print'
import { Button } from '@mui/material';
import CompletedCV from "./components/CompletedCV";

function App() {
  const componentRef = useRef(null);
  const handlePrint = useReactToPrint({
    content: () => componentRef.current
  });

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
    tasks: '',
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
        <Container maxWidth="md" >
        <Paper elevation={3} sx={{padding:4}}>
          <General
            personalInfo={personalInfo}
            setPersonalInfo={setPersonalInfo}
          />

          <Experience experience={experience} setExperience={setExperience} />
          <Education education={education} setEducation={setEducation} />
          
          <Button onClick={handlePrint}>Print Resume</Button>
          </Paper>
          
          </Container>
         
        <CompletedCV ref={componentRef} personalInfo={personalInfo} experience={experience} education={education} />
      </main>
    </div>
  );
}

export default App;
