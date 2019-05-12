import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { imageSource } from './components/Image.js'

it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<App />, div);
    ReactDOM.unmountComponentAtNode(div);
});

it("should include the apiConfig object", () => {
    expect(apiConfig).toBeDefined();
    expect(apiConfig.what3words).toBeDefined();
    expect(apiConfig.unsplash).toBeDefined();
    expect(apiConfig.what3words.accessKey).toBeDefined();
    expect(apiConfig.unsplash.accessKey).toBeDefined();
    expect(typeof(apiConfig.what3words.accessKey)).toEqual("string");
    expect(typeof(apiConfig.unsplash.accessKey)).toEqual("string");
});

it("should check the image string for \"unsplash\"", () => {
    expect(imageSource("unsplash")).toEqual(<p>"image detected"</p>);
    expect(imageSource("Bliss")).toEqual(<p>Bliss</p>);
});