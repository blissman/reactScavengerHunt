import React, { Component } from 'react';
import './App.css';
import apiConfig from './config/apiConfig.js';
import { GetLocationButton } from './components/GetLocationButton.js';
import { Image } from './components/Image.js';

window.apiConfig = apiConfig;

class App extends Component {
    state = {
        "image": "Click the button to get your unique location image!"
    };
    render() {
        return (
            <div className="App">
            <header className="App-header">
            </header>
            <Image image={this.state.image}/>
            <GetLocationButton />
            </div>
        );
    }
}

export default App;