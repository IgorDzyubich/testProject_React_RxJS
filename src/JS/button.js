import '../CSS/button.css'
import {wait, start, stop, reset} from './functions.js'

function Button() {
  return (
    <div className="buttonWrapper">
      <button className="startButton" onClick={start}>Start</button>
      <button className="stopButton" onClick={stop}>Stop</button>
      <button className="waitButton" onClick={wait}>Wait</button>
      <button className="resetButton" onClick={reset}>Reset</button>
    </div>
  );
}

export default Button;