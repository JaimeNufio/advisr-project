# advisr

Vue.js / Express.js Project
- `axios` for Api calls
- `vue2-google-maps` for Google Maps integration
- `vue-bootstrap` as design framework 

## Images:


## Setup Google Maps Key
Rename 'key-example.json' to 'key.json'
in the empty value for 'googlemaps' paste your api key. It should have the following permissions:

...

You can create your API keys here: https://console.cloud.google.com/home/dashboard?project=solid-scheme-334505

## Front-End Setup
```
yarn install
```

### Compiles and hot-reloads for development
```
yarn serve
```

### Compiles and minifies for production
```
yarn build
```

## API Setup

run the following in a seperate terminal
```
node api/api.js
```

# Advisr Applicant Project

### Thanks for your interest in working with us at Advisr!
In order to evaluate engineering candidates' skill sets, we provide this small sample project for candidates to complete. There are two components to implement, a backend API and a frontend web UI implementing the API.

## Requirements
Provided in this repo is a json data file (business-list.json). This contains a list of businesses, the category associated with the business, an array of campaign objects associated with the business and a location specified in latitude and longitude for the business. This will be your "database" to be utilized in an API to power a frontend responsible for displaying a list of businesses and a detail page for individual businesses.

You should either fork this repo or create a new git repo to provide your own solution. The frontend should be built using Vue.js and the backend API should be built using Express.js. A README.md should be provided with instructions on how to build and run your API and frontend project.

## Frontend requirements
The frontend should be built using Vue.js and implement the following requirements:

1. Build a landing page which queries your API to render the business list as a table
   1. The columns you should display are: Business Name, Category, Number of Campaigns, Average Campaign Budget
   2. The list should be sortable by all columns by clicking the column header
   3. Have a search input box above the table which will filter the list by the business name
2. Clicking on the business name in the list will open a new page
   1. This new page should query your API for the detailed data about the single business
   2. Display the business name at the top
   3. The location for the business should be placed as a marker inside of a google map (or other map library)
   4. Display the list of campaigns in a table

## Backend requirements
The backend API should be built using Express.js. The endpoints should be defined by you based off of the frontend requirements.

### Good luck and please let us know if you have any questions!

We will schedule time for you to come in and talk us through your completed project.

