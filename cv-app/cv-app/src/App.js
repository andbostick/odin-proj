import './App.css';
import Education from './components/Education';
import Experience from './components/Experience';
import General from './components/General';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        
        <General />
        <Experience />
        <Education />
      </header>
    </div>
  );
}

export default App;
