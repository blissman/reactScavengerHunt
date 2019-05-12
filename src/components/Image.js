import React from 'react';

let image = "Click the button to get your unique image!";

const imageSource = () => {
    const imageTest = new RegExp(/unsplash/);
    if (!imageTest.test(image)) {
        return <p>{image}</p>;
    } else {
        return <p>"image detected"</p>
    }
};

function Image() {
    return (
        <div id="Image">
        {imageSource()}
        </div>
    );
}

export default Image;