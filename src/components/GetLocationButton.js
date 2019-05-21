import React, { Component } from 'react';
import apiConfig from '../config/apiConfig.js';
import { MakeRequest } from './MakeRequest.js';
import { wordsCallback } from './WordsCallback.js';

export const getLocation = () => {
    if (navigator && navigator.geolocation && navigator.geolocation.getCurrentPosition) {
        return navigator.geolocation.getCurrentPosition(wordsCallback);
    } else {
        return false;
    }
};

export class GetLocationButton extends Component {
    render() {
        window.setImageState = this.props.setImage;
        return (
            <div id="GetLocationButton">
            <button type="button" onClick={getLocation}>Get Location</button>
            </div>
        );
    }
};
