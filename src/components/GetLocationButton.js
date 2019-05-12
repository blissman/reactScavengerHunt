import React from 'react';

const callback = (position) => {
    console.log(position);
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