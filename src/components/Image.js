import React, { Component } from 'react';

let image = "Click on the button to get a unique image!";

export const imageSource = (image) => {
    const imageTest = new RegExp(/unsplash/);
    if (!imageTest.test(image)) {
        return <p>{image}</p>;
    } else {
        return <img src={image} alt="Your Location"></img>;
    }
};

export class Image extends Component {
    render() {
        image = this.props.image;
        return (
            <div id="Image">
            {imageSource(image)}
            </div>
        );
    }
};