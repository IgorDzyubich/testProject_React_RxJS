import '../CSS/App.css';
import Button from './button.js'
import Display from './display.js'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>
          Stopwatch example.
        </p>
        <Display />
        <Button />
      </header>
    </div>
  );
}

export default App;