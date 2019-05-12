import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

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