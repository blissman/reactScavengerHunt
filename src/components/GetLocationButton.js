import React from 'react';
import apiConfig from '../config/apiConfig.js';
import { MakeRequest } from './MakeRequest.js';

const callback = (position) => {
    if (typeof(position) !== "object" && !position.coords && !position.coords.latitude && !position.coords.longitude) {
        return false;
    }

    const latitude = position.coords.latitude;
    const longitude = position.coords.longitude;
    const url = "https://api.what3words.com/v3/convert-to-3wa?coordinates=" + latitude + "%2C" + longitude + "&key=" + apiConfig.what3words.accessKey;
    MakeRequest(url).then((response) => {
        const words = JSON.parse(response.responseText).words;
        console.log(words);
        return words;
    }).catch((error) => {
        console.log(error);
        return false;
    });
};

export const getLocation = () => {
    if (navigator && navigator.geolocation && navigator.geolocation.getCurrentPosition) {
        return navigator.geolocation.getCurrentPosition(callback);
    } else {
        return false;
    }
};

export const GetLocationButton = () => {
    return (
        <div id="GetLocationButton">
        <button type="button" onClick={getLocation}>Get Location</button>
        </div>
    );
};