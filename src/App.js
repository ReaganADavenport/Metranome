import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import Metranome from './Metranome';
// import registerServiceWorker from './registerServiceWorker';
import './index.css';
import './App.css';

ReactDOM.render(<Metranome/>, document.getElementById('root'));
// registerServiceWorker();



class App extends Component {
  state = {
    playing: false,
    count: 0,
    bpm: 100,
    beatsPerMeasure: 4
  };
  
  render(){
    let bpm = 100;
    let playing = false;

    return (
        <div className="App">
        <div className="bpm-slider">
        <div>{bpm} BPM</div>
        <input type="range" min="60" max="240" value={bpm} />
        </div>
        <button>{playing ? 'Stop' : 'Start'}</button>
        </div>
    );
};
}

export default App;
