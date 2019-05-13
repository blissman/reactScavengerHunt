import React from 'react';

let image = "Click on the button to get a unique image!";

export const imageSource = (image) => {
    const imageTest = new RegExp(/unsplash/);
    if (!imageTest.test(image)) {
        return <p>{image}</p>;
    } else {
        return <p>"image detected"</p>;
    }
};

export const Image = () => {
    return (
        <div id="Image">
        {imageSource(image)}
        </div>
    );
};