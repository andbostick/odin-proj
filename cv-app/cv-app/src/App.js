import './App.css';
import Education from './components/Education';
import Experience from './components/Experience';
import General from './components/General';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>CV Creator</h1>
        
      </header>
      <main>
      <General />
        <Experience />
        <Education />
      </main>
    </div>
  );
}

export default App;
