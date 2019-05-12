import React from 'react';

let image = "Click the button to get your unique image!";

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
}