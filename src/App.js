import React from 'react';
import './App.css';
import apiConfig from './config/apiConfig.js';
import { GetLocationButton } from './components/GetLocationButton.js';
import { Image } from './components/Image.js';

window.apiConfig = apiConfig;

function App() {
    return (
        <div className="App">
        <header className="App-header">
        </header>
        <Image />
        <GetLocationButton />
        </div>
    );
}

export default App;