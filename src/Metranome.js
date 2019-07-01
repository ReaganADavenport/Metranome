import React, {Component} from 'react';
import './Metranome.css';

class Metranome extends Component{
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
};

export default Metranome;