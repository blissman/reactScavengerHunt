import React, { Component } from 'react';
import './App.css';
import { GetLocationButton } from './components/GetLocationButton.js';
import { SearchBar } from './components/SearchBar.js';
import { Image } from './components/Image.js';

class App extends Component {
    state = {
        "image": "Click the button to get your unique location image!"
    };

    setImage = (url) => {
        this.setState({"image": url});
    };

    render() {
        return (
            <div className="App">
            <header className="App-header">
            </header>
            <Image image={this.state.image}/>
            <GetLocationButton setImage={this.setImage}/>
            <SearchBar setImage={this.setImage}/>
            </div>
        );
    }
}

export default App;