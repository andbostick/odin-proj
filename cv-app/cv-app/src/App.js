import './styles/App.css';
import Education from './components/Education';
import Experience from './components/Experience';
import General from './components/General';
import { Paper } from '@mui/material';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>CV Creator</h1>
        
      </header>
      <Paper elevation={3} className='container'>
      <General />
        <Experience />
        <Education />
      </Paper>
    </div>
  );
}

export default App;
