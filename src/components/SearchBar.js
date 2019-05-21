import React, { Component } from 'react';
import apiConfig from '../config/apiConfig.js';
import { MakeRequest } from './MakeRequest.js';
import { wordsCallback } from './WordsCallback.js';

export const getBarLocation = (location) => {
    if (typeof(location) !== "string") {
        return false;
    }
    const url = "https://maps.googleapis.com/maps/api/geocode/json?address=" + location + "&key=" + apiConfig.googleGeocode.accessKey;
    MakeRequest(url).then((response) => {
        const responseObject = JSON.parse(response.responseText);
        const location = responseObject.results[0].geometry.location;
        const latitude = location.lat;
        const longitude = location.lng;
        const callbackObject = {
            "coords": {
                "latitude": latitude,
                "longitude": longitude
            }
        };
        wordsCallback(callbackObject);
    }).catch((error) => {
        console.log(error);
    });
};

export class SearchBar extends Component {

    state = {
        "city": ''
    };

    handleChange(event) {
        this.setState({city: event.target.value})
    };

    render() {
        window.setImageState = this.props.setImage;
        return (
            <div id="SearchBar">
            <input type="text" value={this.state.city} onChange={this.handleChange.bind(this)}/><button type="button" onClick={(() => {
                getBarLocation(this.state.city);
            })}>Search Location</button>
            </div>
        );
    }
};
