import './styles/App.css';
import Education from './components/Education';
import Experience from './components/Experience';
import General from './components/General';
import { Paper } from '@mui/material';
import FilledGeneral from './components/FilledGeneral';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>CV Creator</h1>
        
      </header>
      <main className='main-container'>
      <Paper elevation={3} className='container'>
      <General />
        <Experience />
        <Education />
      </Paper>
      <Paper className='container'>
      <FilledGeneral />
        </Paper>
        </main>
    </div>
  );
}

export default App;
