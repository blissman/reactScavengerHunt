# React Scavenger Hunt

React Scavenger Hunt is used for serving unique photos based on the user's location. You can use it to create a scavenger hunt, or to provide a photo tour through a city.

## How it Works

This app takes your detected location and converts the latitude and longitude to a word combination using the what3words api, then returns an image from the unsplash api. You also have the option of using Google's Geocoding API along with the search bar to find pictures for other locations.

## Pre-requisites

### APIs

#### what3words

You'll need an api key from [what3words](https://www.what3words.com) in order to convert your geolocation to a word combination.

#### unsplash

You'll also need an api key from [unsplash](https://www.unsplash.com) in order to fetch images.

#### Google Geocoding

You'll also need an api key from [Google Geocode](https://developers.google.com/maps/documentation/geocoding/start) in order to search for locations.

## Setup

### Set up your API keys

Create a file named ```apiConfig.js``` inside the ```src/config``` folder, using the ```apiConfigTemplate.js``` as a template. Fill in your API keys respectively as strings.

### Testing the App

Start your server using ```$ npm start``` and allow your browser to detect your location. The unique image of your location should appear!

## Using the App

Navigate to the page, click on the button, and get the image for your location!